"use client";

import { useState, useEffect, useRef } from "react";

const ASSET_SLOTS = [
  { wk: "WK 1", slots: ["Asset 01", "Asset 02", "Asset 03"] },
  { wk: "WK 2", slots: ["Asset 04", "Asset 05", "Asset 06"] },
  { wk: "WK 3", slots: ["Asset 07", "Asset 08", "Asset 09"] },
  { wk: "WK 4", slots: ["Asset 10", "Asset 11", "Asset 12"] },
];

export default function FormSection({
  section,
  savedData,
  stepIndex,
  totalSteps,
  onNext,
  onBack,
  onSubmit,
  onSave,
  isFirst,
  isLast,
}) {
  const [localData, setLocalData] = useState({});
  const [saveStatus, setSaveStatus] = useState("idle"); // 'idle' | 'saving' | 'saved
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});
  const dragItem = useRef(null);
  const dragOverItem = useRef(null);

  // Initialise local state from saved data on mount
  useEffect(() => {
    setLocalData(savedData || {});
  }, [stepIndex]);

  function set(key, val) {
    setLocalData((prev) => ({ ...prev, [key]: val }));
  }

  function validate() {
    const newErrors = {};

    section.questions.forEach((q) => {
      // textarea, text, email — must not be empty
      if (["textarea", "text", "email"].includes(q.type)) {
        if (!localData[q.id] || localData[q.id].trim() === "") {
          newErrors[q.id] = true;
        }
      }

      // scales — every axis must have a value selected
      if (q.type === "scales") {
        q.scales.forEach((s, si) => {
          if (!localData[`${q.id}_sv${si}`]) {
            newErrors[`${q.id}_sv${si}`] = true;
          }
        });
      }

      // yesno — every row must have yes or no selected
      if (q.type === "yesno") {
        q.items.forEach((item, ii) => {
          if (!localData[`${q.id}_yn${ii}_val`]) {
            newErrors[`${q.id}_yn${ii}_val`] = true;
          }
        });
      }

      // assettracker — every slot must have a direction entered
      if (q.type === "assettracker") {
        ASSET_SLOTS.forEach(({ slots }) => {
          slots.forEach((slot) => {
            const aid = `${q.id}_${slot.replace(" ", "").toLowerCase()}`;
            if (!localData[aid] || localData[aid].trim() === "") {
              newErrors[aid] = true;
            }
          });
        });
      }

      // priority — considered always complete (client has already ranked by default)
      // no validation needed
    });

    return newErrors;
  }

  function collectAndAdvance(action) {
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      // Scroll to the first error
      const firstErrorKey = Object.keys(newErrors)[0];
      const el =
        document.getElementById(firstErrorKey) ||
        document.querySelector(`[data-errorkey="${firstErrorKey}"]`);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "center" });
      return;
    }
    setErrors({});
    action(localData);
  }

  async function handleSubmitClick() {
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      const firstErrorKey = Object.keys(newErrors)[0];
      const el =
        document.getElementById(firstErrorKey) ||
        document.querySelector(`[data-errorkey="${firstErrorKey}"]`);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "center" });
      return;
    }
    setErrors({});
    setIsSubmitting(true);
    await onSubmit(localData);
  }

  async function handleSave() {
    if (!onSave) return;
    setSaveStatus("saving");
    await onSave(localData);
    setSaveStatus("saved");
    setTimeout(() => setSaveStatus("idle"), 2500);
  }

  // ── DRAG-AND-DROP for priority lists ─────────────────────────────────────
  function handleDragStart(qId, index) {
    dragItem.current = index;
  }

  function handleDragEnter(qId, index) {
    dragOverItem.current = index;
  }

  function handleDragEnd(q) {
    const key = `${q.id}_priority_order`;
    const currentOrder = localData[key] || q.items;
    const newOrder = [...currentOrder];
    const dragged = newOrder.splice(dragItem.current, 1)[0];
    newOrder.splice(dragOverItem.current, 0, dragged);
    dragItem.current = null;
    dragOverItem.current = null;
    set(key, newOrder);
  }

  // ── QUESTION RENDERERS ────────────────────────────────────────────────────

  function renderTextarea(q) {
    return (
      <>
        <textarea
          id={q.id}
          rows={q.rows || 3}
          placeholder={q.placeholder || ""}
          value={localData[q.id] || ""}
          className={errors[q.id] ? "error" : ""}
          onChange={(e) => {
            set(q.id, e.target.value);
            setErrors((prev) => ({ ...prev, [q.id]: false }));
          }}
        />
        {errors[q.id] && (
          <div className="error-msg">↑ This field is required</div>
        )}
      </>
    );
  }

  function renderText(q) {
    return (
      <>
        <input
          type="text"
          id={q.id}
          placeholder={q.placeholder || ""}
          value={localData[q.id] || ""}
          className={errors[q.id] ? "error" : ""}
          onChange={(e) => {
            set(q.id, e.target.value);
            setErrors((prev) => ({ ...prev, [q.id]: false }));
          }}
        />
        {errors[q.id] && (
          <div className="error-msg">↑ This field is required</div>
        )}
      </>
    );
  }

  function renderEmail(q) {
    return (
      <>
        <input
          type="email"
          id={q.id}
          placeholder={q.placeholder || ""}
          value={localData[q.id] || ""}
          className={errors[q.id] ? "error" : ""}
          onChange={(e) => {
            set(q.id, e.target.value);
            setErrors((prev) => ({ ...prev, [q.id]: false }));
          }}
        />
        {errors[q.id] && (
          <div className="error-msg">↑ This field is required</div>
        )}
      </>
    );
  }

  function renderScales(q) {
    return (
      <div id={`${q.id}_scales`}>
        {q.scales.map((s, si) => {
          const savedVal = localData[`${q.id}_sv${si}`];
          const hasError = errors[`${q.id}_sv${si}`];
          return (
            <div key={si} className="scale-wrap">
              <div className="scale-question-text">{s.label}</div>
              <div className="scale-row">
                <span className="scale-label">{s.left}</span>
                <div
                  className={`scale-buttons${hasError ? " scale-btn-group error" : ""}`}
                  data-errorkey={`${q.id}_sv${si}`}
                >
                  {[1, 2, 3, 4, 5].map((n) => (
                    <button
                      key={n}
                      className={`scale-btn${savedVal == n ? " selected" : ""}`}
                      onClick={() => {
                        set(`${q.id}_sv${si}`, n);
                        setErrors((prev) => ({
                          ...prev,
                          [`${q.id}_sv${si}`]: false,
                        }));
                      }}
                      type="button"
                    >
                      {n}
                    </button>
                  ))}
                </div>
                <span className="scale-label right">{s.right}</span>
              </div>
              {hasError && (
                <div className="error-msg">↑ Please select a value</div>
              )}
            </div>
          );
        })}
      </div>
    );
  }

  function renderYesNo(q) {
    return (
      <div>
        {q.items.map((item, ii) => {
          const val = localData[`${q.id}_yn${ii}_val`];
          const hasError = errors[`${q.id}_yn${ii}_val`];
          return (
            <div
              key={ii}
              className={`yn-row${hasError ? " error" : ""}`}
              data-errorkey={`${q.id}_yn${ii}_val`}
            >
              <span className="yn-question">{item}</span>
              <div className="yn-buttons">
                <button
                  type="button"
                  className={`yn-btn${val === "yes" ? " selected-yes" : ""}`}
                  onClick={() => {
                    set(`${q.id}_yn${ii}_val`, "yes");
                    setErrors((prev) => ({
                      ...prev,
                      [`${q.id}_yn${ii}_val`]: false,
                    }));
                  }}
                >
                  YES
                </button>
                <button
                  type="button"
                  className={`yn-btn${val === "no" ? " selected-no" : ""}`}
                  onClick={() => {
                    set(`${q.id}_yn${ii}_val`, "no");
                    setErrors((prev) => ({
                      ...prev,
                      [`${q.id}_yn${ii}_val`]: false,
                    }));
                  }}
                >
                  NO
                </button>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
  function renderPriority(q) {
    const key = `${q.id}_priority_order`;
    const order = localData[key] || q.items;
    return (
      <ul className="priority-list">
        {order.map((item, i) => (
          <li
            key={item}
            className="priority-item"
            draggable
            onDragStart={() => handleDragStart(q.id, i)}
            onDragEnter={() => handleDragEnter(q.id, i)}
            onDragEnd={() => handleDragEnd(q)}
            onDragOver={(e) => e.preventDefault()}
          >
            <span className="priority-rank">{i + 1}</span>
            <span className="priority-text">{item}</span>
            <span className="drag-handle">⠿</span>
          </li>
        ))}
      </ul>
    );
  }

  function renderAssetTracker(q) {
    return (
      <table className="asset-table">
        <thead>
          <tr>
            <th style={{ width: "64px" }}>Week</th>
            <th style={{ width: "80px" }}>Slot</th>
            <th>Theme / Topic / Format Direction</th>
          </tr>
        </thead>
        <tbody>
          {ASSET_SLOTS.map(({ wk, slots }) =>
            slots.map((slot, si) => {
              const aid = `${q.id}_${slot.replace(" ", "").toLowerCase()}`;
              const hasError = errors[aid];
              return (
                <tr key={slot}>
                  <td className="week-cell">{si === 0 ? wk : ""}</td>
                  <td className="slot-cell">{slot}</td>
                  <td className="input-cell">
                    <input
                      type="text"
                      id={aid}
                      placeholder="Direction for this asset..."
                      value={localData[aid] || ""}
                      className={hasError ? "error" : ""}
                      onChange={(e) => {
                        set(aid, e.target.value);
                        setErrors((prev) => ({ ...prev, [aid]: false }));
                      }}
                    />
                  </td>
                </tr>
              );
            }),
          )}
        </tbody>
      </table>
    );
  }

  function renderQuestion(q) {
    switch (q.type) {
      case "textarea":
        return renderTextarea(q);
      case "text":
        return renderText(q);
      case "email":
        return renderEmail(q);
      case "scales":
        return renderScales(q);
      case "yesno":
        return renderYesNo(q);
      case "priority":
        return renderPriority(q);
      case "assettracker":
        return renderAssetTracker(q);
      default:
        return null;
    }
  }

  // ── RENDER ────────────────────────────────────────────────────────────────
  return (
    <div className="form-section active">
      {Object.values(errors).some(Boolean) && (
        <div className="section-error-banner">
          // All fields are required — complete every question before proceeding
        </div>
      )}
      <div className="section-tag">{section.tag}</div>
      <div
        className="section-title"
        dangerouslySetInnerHTML={{
          __html: section.title.replace("\n", "<br />"),
        }}
      />
      <div className="section-subtitle">{section.subtitle}</div>

      {section.scopeNote && (
        <div
          className="scope-note"
          dangerouslySetInnerHTML={{ __html: section.scopeNote }}
        />
      )}

      <hr className="section-rule" />

      {section.questions.map((q) => (
        <div key={q.id} className="q-block">
          {q.label && (
            <div className="q-label">
              {q.num && <span className="q-num">{q.num}</span>}
              <span className="q-text">{q.label}</span>
            </div>
          )}
          {q.directive && <div className="q-directive">{q.directive}</div>}
          {renderQuestion(q)}
        </div>
      ))}

      {/* Save bar */}
      {onSave && (
        <div className="save-bar">
          <button
            type="button"
            className={`btn-save${saveStatus === "saving" ? " saving" : ""}${saveStatus === "saved" ? " saved" : ""}`}
            onClick={handleSave}
            disabled={saveStatus === "saving"}
          >
            {saveStatus === "saving" && "Saving..."}
            {saveStatus === "saved" && "Saved ✓"}
            {saveStatus === "idle" && "Save Progress"}
          </button>
        </div>
      )}

      {/* Navigation */}
      <div className="form-nav"></div>

      {/* Navigation */}
      <div className="form-nav">
        <button
          type="button"
          className="btn-nav"
          onClick={() => onBack(localData)}
          disabled={isFirst}
        >
          ← Back
        </button>
        <div className="nav-step-info">
          Section {stepIndex + 1} of {totalSteps}
        </div>
        {isLast ? (
          <button
            type="button"
            className={`btn-nav primary${isSubmitting ? " submitting" : ""}`}
            onClick={handleSubmitClick}
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sending..." : "Submit Brief →"}
          </button>
        ) : (
          <button
            type="button"
            className="btn-nav primary"
            onClick={() => collectAndAdvance(onNext)}
          >
            Next Section →
          </button>
        )}
      </div>
    </div>
  );
}
