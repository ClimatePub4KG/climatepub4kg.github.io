// src/pages/OntologyPage.tsx
import { useEffect } from "react";

export default function OntologyPage() {
  useEffect(() => {
    window.location.href = "/ontology/index.html";
  }, []);

  return <div>Redirecting to ontology documentation...</div>;
}
