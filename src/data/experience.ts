export const EXPERIENCE_DATA = [
  {
    id: 1,
    role: 'Software Engineer (Level 2)',
    company: 'Quantium',
    date: 'Sep 2026 — Present',
    bullets: [
      "Architected and built 'Proactive Insights' from scratch in C# (.NET 10): an event-driven backend module using RabbitMQ to asynchronously process post-hydration data and send real-time analytical alerts to users, supporting every alert in the platform's metrics library.",
      'Led a large-scale ASDA database migration covering millions of records, moving from legacy Walmart product IDs to custom IDs to decouple and standardise product management across the platform.',
      'Redesigned Fast Reporting end-to-end with a sleek, modern UI and on-demand loading, fetching only the report selected in the header rather than every report up front, drastically reducing Snowflake query costs.',
      'Built custom Claude Code skills and automated workflows for extending the backend, cutting the time to add a new alert type from 3–4 days to 1 day.',
    ],
  },
  {
    id: 2,
    role: 'Software Engineer (Level 1)',
    company: 'Quantium',
    date: 'Sep 2025 — Sep 2026',
    bullets: [
      'Led the migration of checkout from a monolithic frontend to a Micro-Frontend (MFE) architecture using Single-SPA, enabling multiple teams to develop and deploy their parts of the platform independently.',
      'Built and maintained frontend components in React using an in-house design system, keeping the user experience consistent across the platform.',
      'Maintained and cleaned up CI/CD pipelines in GitHub Actions, simplifying build and deployment workflows across backend and frontend services.',
      'Used Datadog for application monitoring and observability, giving the team visibility into performance and errors across frontend and backend services.',
      'Wrote and maintained end-to-end test suites in Cypress, ensuring reliability across frontend modules.',
      'Developed backend services in C#, contributing to full-stack feature delivery.',
    ],
  },
  {
    id: 3,
    role: 'Graduate Software Engineer',
    company: 'Quantium',
    date: 'Sep 2024 — Sep 2025',
    bullets: [
      'Delivered a full redesign of the Watchlist feature within checkout, a retail product analytics platform used by thousands of clients, improving usability and visual consistency throughout the application.',
      'Modernised the Dashboard UI to be more scalable and interactive, adding drag-and-drop layout customisation using TanStack.',
      "Supported the migration of Dashboard backend services to .NET 8, alongside completing the graduate programme's training in Git, automation, testing, security, DevOps, cloud and SQL.",
      'Worked in an Agile team, taking part in sprints, stand-ups and code reviews to deliver iterative improvements.',
    ],
  },
];
