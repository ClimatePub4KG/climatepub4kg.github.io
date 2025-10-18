// src/pages/OntologyPage.tsx
import { useEffect } from "react";

export default function OntologyPage() {
  useEffect(() => {
    window.location.href = "/ontology/index-en.html";
  }, []);

  return <div>Redirecting to ontology documentation...</div>;
}
