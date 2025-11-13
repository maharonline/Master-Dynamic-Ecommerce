"use client";
import { useRouter } from "next/navigation";
import { ShoppingBag } from "lucide-react";
import { useEffect, useState } from "react";

export default function CartButton({ className }) {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <button onClick={() => router.push("/cart")} className={className}>
      <ShoppingBag />
    </button>
  );
}

