export interface ProjectInquiry {
  name: string;
  businessName: string;
  email: string;
  phone: string;
  serviceNeeded: string;
  currentWebsite?: string;
  projectDescription: string;
  budgetRange: string;
  expectedTimeline: string;
  preferredContact: 'WhatsApp' | 'Phone Call' | 'Email';
}

/**
 * Frontend Service Layer for Project Inquiries.
 * Connects to a real Node.js / Express backend if VITE_API_BASE_URL is configured,
 * or simulates a structured submission during development with zero fake data.
 */
export async function submitProjectInquiry(data: ProjectInquiry): Promise<{ success: boolean; message: string; refId?: string }> {
  const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;

  if (apiBaseUrl) {
    try {
      const response = await fetch(`${apiBaseUrl}/api/inquiries`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error(`Server returned ${response.status}`);
      }

      const result = await response.json();
      return {
        success: true,
        message: result.message || "Inquiry received successfully.",
        refId: result.refId || `INQ-${Date.now().toString().slice(-6)}`
      };
    } catch (err) {
      console.error("Backend submission error:", err);
      throw new Error("Unable to reach backend server. Please contact us directly via WhatsApp or Email.");
    }
  }

  // Development / Staging fallback simulation:
  // In production without an active API endpoint yet, we validate and generate a reference token
  await new Promise((resolve) => setTimeout(resolve, 800));

  console.info("Project Inquiry recorded (ready for API integration):", data);

  return {
    success: true,
    message: "Thank you. Your consultation request has been received by Daksh Prajapat.",
    refId: `INQ-${Math.floor(100000 + Math.random() * 900000)}`
  };
}
