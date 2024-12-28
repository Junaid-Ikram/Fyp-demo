"use client";
import { useState } from "react";
import Toast from "@/components/HomePageComponents/RegistrationFormComponents/form/toast/toast";
export default function DemoPage() {
  const [showToast, setShowToast] = useState(false);

  return (
    <div>
      <button onClick={() => setShowToast(true)}>Show Toast</button>
      {showToast && (
        <Toast
          message="Please enter all fields"
          type="Error"
          onClose={() => setShowToast(false)}
        />
      )}
    </div>
  );
}
