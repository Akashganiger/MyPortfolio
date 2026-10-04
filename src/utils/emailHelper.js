export const AKASH_EMAIL = "akashganiger1@gmail.com";

export const getGmailComposeUrl = (
  subject = "Job Opportunity / Recruiter Inquiry for Akash Ganiger",
  body = "Hello Akash,\n\nI am reaching out regarding an opportunity at our company.\n\nCompany Name:\nRole / Position:\nLocation:\nMessage:\n\nBest regards,\n[Your Name]\n[Contact Information]"
) => {
  return `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(AKASH_EMAIL)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
};

export const getMailtoUrl = (
  subject = "Job Opportunity / Recruiter Inquiry for Akash Ganiger",
  body = "Hello Akash,\n\nI am reaching out regarding an opportunity at our company.\n\nCompany Name:\nRole / Position:\nLocation:\nMessage:\n\nBest regards,\n[Your Name]\n[Contact Information]"
) => {
  return `mailto:${AKASH_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
};
