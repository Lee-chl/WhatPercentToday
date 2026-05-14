import React from "react";

function Footer() {
  return (
    <div>
      <h4 style={{ textAlign: "center" }}>
        &copy; 2026 오늘 몇 퍼 All right reserved
      </h4>
    </div>
  );
}

export const FooterMemo = React.memo(Footer);
