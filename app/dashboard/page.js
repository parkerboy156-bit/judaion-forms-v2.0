"use client";

import { useEffect, useState } from "react";
import { createClient } from "../../lib/supabase";
import { useRouter } from "next/navigation";

const TIER_LABELS = {
  t1: { name: "FOUNDATION", label: "Identity Launchpad", sections: 6 },
  t2: { name: "FRONT DOOR", label: "Digital Authority", sections: 7 },
  t3: { name: "ARCHITECTURE", label: "Scale Partner", sections: 6 },
};

export default function Dashboard() {
  const [user, setUser] = useState(null);
  const [progress, setProgress] = useState([]);
  const [loading, setLoading] = useState(true);
  const [fadingOut, setFadingOut] = useState(false);
  const router = useRouter();
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
      setUser(user);

      const { data } = await supabase
        .from("form_progress")
        .select("*")
        .eq("user_id", user.id);

      setProgress(data || []);
      setFadingOut(true);
      setTimeout(() => setLoading(false), 800);
    }
    load();
  }, []);

  async function handleLogout() {
    setLoading(true);
    setFadingOut(false);
    await supabase.auth.signOut();
    setFadingOut(true);
    setTimeout(() => {
      router.push("/login");
    }, 800);
  }

  function handleResume(tier) {
    router.push(`/form?tier=${tier}`);
  }

  function handleStart(tier) {
    router.push(`/form?tier=${tier}`);
  }

  if (loading) {
    return (
      <div className={`loading-screen${fadingOut ? " fade-out" : ""}`}>
        <div className="loading-text">Establishing Authority</div>
      </div>
    );
  }

  const tiers = ["t1", "t2", "t3"];

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
          maxWidth: "960px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "64px",
        }}
      >
        <div>
          <div
            className="landing-wordmark"
            style={{ marginBottom: "4px", opacity: 1, animation: "none" }}
          >
            JUDAION Studios | Client Portal
          </div>
          <div
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "11px",
              color: "var(--muted)",
              letterSpacing: "0.15em",
            }}
          >
            {user?.email}
          </div>
        </div>
        <button className="btn-nav" onClick={handleLogout} disabled={loading}>
          Log Out
        </button>
      </div>

      {/* Title */}
      <div style={{ width: "100%", maxWidth: "960px", marginBottom: "48px" }}>
        <div className="section-tag">// Client Dashboard</div>
        <div
          className="section-title"
          style={{ fontSize: "clamp(36px, 5vw, 60px)" }}
        >
          CURRENT
          <br />
          EXTRACTION AUDITS
        </div>
        <hr className="section-rule" style={{ marginTop: "24px" }} />
      </div>

      {/* Tier cards */}
      <div className="tier-grid" style={{ maxWidth: "960px" }}>
        {tiers.map((tier) => {
          const saved = progress.find((p) => p.tier === tier);
          const meta = TIER_LABELS[tier];
          const step = saved ? saved.current_step : 0;
          const done = saved ? saved.completed : false;
          const started = !!saved;

          const pct = started
            ? Math.round(((step + 1) / meta.sections) * 100)
            : 0;

          return (
            <div
              key={tier}
              className={`tier-card tier-card-${tier}`}
              style={{ cursor: "default" }}
            >
              <div className="tier-number">Tier {tier.replace("t", "0")}</div>
              <div className="tier-name">{meta.name}</div>
              <div className="tier-label">{meta.label}</div>

              {/* Progress indicator */}
              <div style={{ margin: "20px 0 24px" }}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    fontFamily: "var(--font-mono)",
                    fontSize: "10px",
                    color: "var(--muted)",
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    marginBottom: "8px",
                  }}
                >
                  <span>
                    {done
                      ? "Submitted"
                      : started
                        ? `Section ${step + 1} of ${meta.sections}`
                        : "Not started"}
                  </span>
                  <span>{done ? "100%" : `${pct}%`}</span>
                </div>
                <div
                  style={{
                    height: "2px",
                    background: "var(--border)",
                    width: "100%",
                  }}
                >
                  <div
                    style={{
                      height: "100%",
                      width: done ? "100%" : `${pct}%`,
                      background: done ? "var(--subtle)" : "var(--red)",
                      transition: "width 0.4s ease",
                    }}
                  />
                </div>
              </div>

              {!done && (
                <button
                  className="btn-nav primary"
                  style={{ width: "100%" }}
                  onClick={() =>
                    started ? handleResume(tier) : handleStart(tier)
                  }
                >
                  {started ? "Resume AUDIT →" : "INITIATE AUDIT →"}
                </button>
              )}
              {done && (
                <div
                  className="tier-cta"
                  style={{ cursor: "default", color: "var(--subtle)" }}
                >
                  Brief Submitted ✓
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
