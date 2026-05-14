import React from "react";

function Header() {
  return (
    <div>
      <h1>오늘 몇 퍼🧮</h1>
    </div>
  );
}

export const HeaderMemo = React.memo(Header);
