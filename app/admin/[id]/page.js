"use client";

import { useEffect, useState } from "react";
import { createClient } from "../../../lib/supabase";
import { useRouter, useParams } from "next/navigation";
import { FORMS } from "../../data/forms";

const TIER_LABELS = {
  t1: "T1 | Identity Launchpad",
  t2: "T2 | Digital Authority",
  t3: "T3 | Scale Partner",
};

const ASSET_SLOTS = [
  "Asset 01",
  "Asset 02",
  "Asset 03",
  "Asset 04",
  "Asset 05",
  "Asset 06",
  "Asset 07",
  "Asset 08",
  "Asset 09",
  "Asset 10",
  "Asset 11",
  "Asset 12",
];

const STATUS_OPTIONS = ["pending", "reviewed", "actioned"];

const STATUS_STYLES = {
  pending: { color: "var(--red)", label: "PENDING" },
  reviewed: { color: "#f39c12", label: "REVIEWED" },
  actioned: { color: "#2ecc71", label: "ACTIONED" },
};

export default function SubmissionDetail() {
  const [submission, setSubmission] = useState(null);
  const [loading, setLoading] = useState(true);
  const [fadingOut, setFadingOut] = useState(false);
  const [updating, setUpdating] = useState(false);
  const router = useRouter();
  const { id } = useParams();
  const supabase = createClient();

  useEffect(() => {
    async function load() {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      if (!user) {
        router.push("/login");
        return;
      }

      const { data, error } = await supabase
        .from("form_progress")
        .select("*")
        .eq("id", id)
        .single();

      if (error || !data) {
        router.push("/admin");
        return;
      }

      setSubmission(data);
      setFadingOut(true);
      setTimeout(() => setLoading(false), 600);
    }
    load();
  }, [id]);

  async function handleStatusChange(newStatus) {
    setUpdating(true);
    await supabase
      .from("form_progress")
      .update({ status: newStatus })
      .eq("id", id);
    setSubmission((prev) => ({ ...prev, status: newStatus }));
    setUpdating(false);
  }

  function renderAnswer(q, formData) {
    if (!formData) return null;

    if (q.type === "assettracker") {
      return (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "80px 1fr",
            gap: "2px",
          }}
        >
          {ASSET_SLOTS.map((slot) => {
            const aid = `${q.id}_${slot.replace(" ", "").toLowerCase()}`;
            const val = formData[aid];
            if (!val) return null;
            return (
              <div key={slot} style={{ display: "contents" }}>
                <div
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "10px",
                    color: "var(--muted)",
                    letterSpacing: "0.1em",
                    padding: "6px 0",
                  }}
                >
                  {slot}
                </div>
                <div
                  style={{
                    fontSize: "13px",
                    color: "var(--body)",
                    padding: "6px 0",
                    borderBottom: "1px solid var(--border)",
                  }}
                >
                  {val}
                </div>
              </div>
            );
          })}
        </div>
      );
    }

    if (q.type === "scales") {
      return (
        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          {q.scales.map((s, si) => {
            const val = formData[`${q.id}_sv${si}`];
            return (
              <div
                key={si}
                style={{ display: "flex", alignItems: "center", gap: "16px" }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "10px",
                    color: "var(--muted)",
                    minWidth: "140px",
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                  }}
                >
                  {s.left}
                </span>
                <div style={{ display: "flex", gap: "4px" }}>
                  {[1, 2, 3, 4, 5].map((n) => (
                    <div
                      key={n}
                      style={{
                        width: "32px",
                        height: "32px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontFamily: "var(--font-mono)",
                        fontSize: "12px",
                        background: val == n ? "var(--red)" : "var(--surface)",
                        border: `1px solid ${val == n ? "var(--red)" : "var(--border)"}`,
                        color: val == n ? "var(--white)" : "var(--muted)",
                      }}
                    >
                      {n}
                    </div>
                  ))}
                </div>
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "10px",
                    color: "var(--muted)",
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                  }}
                >
                  {s.right}
                </span>
              </div>
            );
          })}
        </div>
      );
    }

    if (q.type === "yesno") {
      return (
        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          {q.items.map((item, ii) => {
            const val = formData[`${q.id}_yn${ii}_val`];
            return (
              <div
                key={ii}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "10px 0",
                  borderBottom: "1px solid var(--border)",
                }}
              >
                <span style={{ fontSize: "13px", color: "var(--body)" }}>
                  {item}
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "10px",
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color:
                      val === "yes"
                        ? "#2ecc71"
                        : val === "no"
                          ? "var(--red)"
                          : "var(--muted)",
                    border: `1px solid ${val === "yes" ? "#2ecc71" : val === "no" ? "var(--red)" : "var(--border)"}`,
                    padding: "3px 10px",
                  }}
                >
                  {val ? val.toUpperCase() : "—"}
                </span>
              </div>
            );
          })}
        </div>
      );
    }

    if (q.type === "priority") {
      const order = formData[`${q.id}_priority_order`] || q.items;
      return (
        <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
          {order.map((item, i) => (
            <div
              key={item}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "16px",
                padding: "8px 12px",
                background: "var(--surface)",
                border: "1px solid var(--border)",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "10px",
                  color: "var(--red)",
                  minWidth: "20px",
                }}
              >
                {i + 1}
              </span>
              <span style={{ fontSize: "13px", color: "var(--body)" }}>
                {item}
              </span>
            </div>
          ))}
        </div>
      );
    }

    // text, textarea, email
    const val = formData[q.id];
    if (!val)
      return (
        <div
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "11px",
            color: "var(--muted)",
            fontStyle: "italic",
          }}
        >
          No answer provided
        </div>
      );
    return (
      <div
        style={{
          fontSize: "14px",
          color: "var(--body)",
          lineHeight: "1.7",
          padding: "16px 18px",
          background: "var(--surface)",
          border: "1px solid var(--border)",
          whiteSpace: "pre-wrap",
        }}
      >
        {val}
      </div>
    );
  }

  if (loading) {
    return (
      <div className={`loading-screen${fadingOut ? " fade-out" : ""}`}>
        <div className="loading-text">Loading brief</div>
      </div>
    );
  }

  if (!submission) return null;

  const formDef = FORMS[submission.tier];
  const formData = submission.form_data;
  const date = new Date(submission.updated_at).toLocaleDateString("en-ZA", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const time = new Date(submission.updated_at).toLocaleTimeString("en-ZA", {
    hour: "2-digit",
    minute: "2-digit",
  });
  const statusStyle = STATUS_STYLES[submission.status] || STATUS_STYLES.pending;

  return (
    <div
      id="landing"
      className="screen active"
      style={{ justifyContent: "flex-start", paddingTop: "80px" }}
    >
      {/* Header */}
      <div
        style={{
          width: "100%",
          maxWidth: "860px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "48px",
        }}
      >
        <button className="btn-nav" onClick={() => router.push("/admin")}>
          ← All Submissions
        </button>

        {/* Status controls */}
        <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "10px",
              color: "var(--muted)",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              marginRight: "8px",
            }}
          >
            Status:
          </span>
          {STATUS_OPTIONS.map((s) => {
            const st = STATUS_STYLES[s];
            const isActive = submission.status === s;
            return (
              <button
                key={s}
                onClick={() => handleStatusChange(s)}
                disabled={updating || isActive}
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "10px",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  padding: "6px 14px",
                  cursor: isActive ? "default" : "pointer",
                  background: isActive ? st.color : "transparent",
                  border: `1px solid ${isActive ? st.color : "var(--border)"}`,
                  color: isActive ? "var(--black)" : "var(--muted)",
                  transition: "all 0.15s",
                  opacity: updating ? 0.5 : 1,
                }}
              >
                {st.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Brief header */}
      <div style={{ width: "100%", maxWidth: "860px", marginBottom: "48px" }}>
        <div className="section-tag">
          {TIER_LABELS[submission.tier] || submission.tier}
        </div>
        <div
          className="section-title"
          style={{ fontSize: "clamp(36px, 5vw, 56px)", marginBottom: "16px" }}
        >
          BRIEF
          <br />
          SUBMISSION
        </div>
        <div style={{ display: "flex", gap: "40px", flexWrap: "wrap" }}>
          <div>
            <div
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "10px",
                color: "var(--muted)",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                marginBottom: "4px",
              }}
            >
              Client
            </div>
            <div style={{ fontSize: "14px", color: "var(--white)" }}>
              {submission.client_email || "Unknown"}
            </div>
          </div>
          <div>
            <div
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "10px",
                color: "var(--muted)",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                marginBottom: "4px",
              }}
            >
              Submitted
            </div>
            <div
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "13px",
                color: "var(--body)",
              }}
            >
              {date} at {time}
            </div>
          </div>
          <div>
            <div
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "10px",
                color: "var(--muted)",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                marginBottom: "4px",
              }}
            >
              Status
            </div>
            <div
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "12px",
                letterSpacing: "0.15em",
                color: statusStyle.color,
                textTransform: "uppercase",
              }}
            >
              {statusStyle.label}
            </div>
          </div>
        </div>
        <hr className="section-rule" style={{ marginTop: "32px" }} />
      </div>

      {/* Sections and answers */}
      <div style={{ width: "100%", maxWidth: "860px" }}>
        {formDef?.sections.map((sec, si) => (
          <div key={si} style={{ marginBottom: "64px" }}>
            {/* Section header */}
            <div style={{ marginBottom: "32px" }}>
              <div className="section-tag">{sec.tag}</div>
              <div
                className="section-title"
                style={{
                  fontSize: "clamp(28px, 4vw, 44px)",
                  marginBottom: "8px",
                }}
                dangerouslySetInnerHTML={{
                  __html: sec.title.replace("\n", "<br />"),
                }}
              />
              <div className="section-subtitle">{sec.subtitle}</div>
              <hr className="section-rule" />
            </div>

            {/* Questions */}
            {sec.questions.map((q) => (
              <div key={q.id} style={{ marginBottom: "40px" }}>
                {q.label && (
                  <div className="q-label" style={{ marginBottom: "8px" }}>
                    {q.num && <span className="q-num">{q.num}</span>}
                    <span className="q-text">{q.label}</span>
                  </div>
                )}
                {q.directive && (
                  <div
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "11px",
                      color: "var(--muted)",
                      lineHeight: "1.7",
                      marginBottom: "14px",
                      paddingLeft: "32px",
                      borderLeft: "2px solid var(--border)",
                      fontStyle: "italic",
                    }}
                  >
                    {q.directive}
                  </div>
                )}
                {renderAnswer(q, formData)}
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Bottom back button */}
      <div
        style={{
          width: "100%",
          maxWidth: "860px",
          paddingBottom: "80px",
          paddingTop: "40px",
          borderTop: "1px solid var(--border)",
        }}
      >
      </div>
    </div>
  );
}
