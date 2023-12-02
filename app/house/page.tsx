import Link from "next/link";
import React from "react";

export default function House() {
  const id = "1";
  return (
    <div>
      <h1>House</h1>
      <Link href={`/house/${id}`}>
        <p>Go to House 1</p>
      </Link>
    </div>
  );
}
