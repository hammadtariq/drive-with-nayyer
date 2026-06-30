# PRD: Driving With Nayyer MVP

## Problem Statement

Nayyer Sultana runs a women-only driving instruction business in Mississauga under her own brand, Driving With Nayyer. She currently markets through Instagram and Facebook and receives inquiries through WhatsApp and direct messages. Many potential students ask about lesson availability but do not commit, creating wasted back-and-forth and unpaid time holds.

The business needs a mobile-first website that builds trust, explains the packages, and lets serious students choose an available first lesson slot and pay for a full driving package before the slot is confirmed.

The MVP must deliver value within one week by reducing manual inquiry handling, preventing unpaid reservations, and giving students a clear path from interest to paid booking.

## Solution

Build a single-page, mobile-responsive Next.js marketing website for Driving With Nayyer. The site will present Nayyer as an MTO Certified Instructor offering women-only driving lessons in Mississauga for G2 and G students, with support in English, Urdu, and Hindi.

The website will show the three driving packages and route each package's booking button to a corresponding Cal.com paid booking flow. In Cal.com, the student selects an available first lesson slot, enters required student details, and pays the full package price through Stripe. The first slot is only confirmed after successful payment. Remaining package lessons are coordinated manually by Nayyer after the initial booking, likely through WhatsApp.

The MVP avoids custom scheduling, custom payments, student accounts, package balance tracking, admin dashboards, and multi-lesson scheduling.

## User Stories

1. As a prospective student, I want to immediately understand that the service is for women only, so that I know whether this instructor is right for me.
2. As a prospective student, I want to see that Nayyer is an MTO Certified Instructor, so that I can trust her qualifications.
3. As a prospective student, I want to know that Nayyer supports G2 and G training, so that I can choose her based on my license goal.
4. As a prospective student, I want to know that lessons are available in English, Urdu, and Hindi, so that I can learn in a language I am comfortable with.
5. As a prospective student, I want to see that pickup and drop-off are available in selected Mississauga areas, so that I understand the convenience offered.
6. As a prospective student, I want to see clear driving package options, so that I can compare what is included before booking.
7. As a prospective student, I want to see Package 01, so that I can understand the basic BDE certificate and 10 in-car lessons option.
8. As a prospective student, I want to see Package 02, so that I can understand the 10-lesson package with road test pickup/drop-off, practice, and training car.
9. As a prospective student, I want to see Package 03, so that I can understand the 15-lesson package with road test pickup/drop-off, practice, and training car.
10. As a prospective student, I want package prices shown in CAD once confirmed, so that I can decide before starting checkout.
11. As a prospective student, I want a clear booking button on each package, so that I can start booking the package I want without messaging first.
12. As a prospective student, I want to choose my first lesson slot before paying, so that I know when my first appointment will happen.
13. As a prospective student, I want the selected first lesson slot to be confirmed only after payment, so that the booking feels reliable and official.
14. As a prospective student, I want to pay through a familiar checkout flow, so that I feel safe purchasing the package online.
15. As a prospective student, I want to receive confirmation after payment, so that I know my first slot is booked.
16. As a prospective student, I want to know what happens after the first paid booking, so that I understand how remaining lessons will be scheduled.
17. As a prospective student, I want to know whether I should book G2 or G training, so that I can pick the right package or ask before paying.
18. As a prospective student, I want an option to contact Nayyer through WhatsApp, so that I can ask a question if I am unsure which package to choose.
19. As a prospective student, I want to see photos of Nayyer, the car, and students, so that I can trust the service before paying.
20. As a prospective student, I want to see testimonials, so that I can learn from past students' experiences.
21. As a prospective student, I want to see video content if available, so that I can get a stronger sense of the instructor and learning environment.
22. As a prospective student, I want to see contact information, so that I can reach the business outside the booking flow if necessary.
23. As a prospective student, I want the site to load and work well on mobile, so that I can book from Instagram, Facebook, or WhatsApp links.
24. As a prospective student, I want the site content to be simple and direct, so that I can make a decision quickly.
25. As a prospective student, I want to know the cancellation, reschedule, no-show, and refund policy before paying, so that I understand the terms.
26. As a prospective student, I want to know whether extra fees or exclusions apply, so that there are no surprises after payment.
27. As a prospective student, I want to know the service area for pickup and drop-off, so that I do not book if I am outside the covered area.
28. As a prospective student, I want to enter my pickup area or address during booking, so that Nayyer has the information needed for the lesson.
29. As a prospective student, I want to enter my phone or WhatsApp number during booking, so that Nayyer can coordinate after payment.
30. As a prospective student, I want to enter my license goal and experience level, so that Nayyer can prepare for the first lesson.
31. As Nayyer, I want serious students to pay before a slot is confirmed, so that unpaid leads do not block my time.
32. As Nayyer, I want each package to have its own booking flow, so that package selection is clear and payment amount is correct.
33. As Nayyer, I want the first lesson slot to be selected before package purchase, so that I know when to meet the student.
34. As Nayyer, I want Cal.com to manage available slots, so that I do not need custom scheduling software in phase 1.
35. As Nayyer, I want Stripe to collect payment, so that package purchases are handled securely.
36. As Nayyer, I want the website to answer common questions, so that I receive fewer repetitive WhatsApp messages.
37. As Nayyer, I want students to understand that remaining lessons are coordinated after the first appointment, so that the website does not overpromise full package scheduling.
38. As Nayyer, I want my public phone number and email displayed correctly, so that students can reach me.
39. As Nayyer, I want the website to show women-only positioning clearly and professionally, so that it attracts the right audience.
40. As Nayyer, I want the website to avoid unsupported claims such as guaranteed passing, so that the business stays credible.
41. As Nayyer, I want to use real photos, testimonials, and videos, so that the site feels trustworthy and personal.
42. As Nayyer, I want to update prices later if needed, so that package changes do not require rebuilding the whole system.
43. As Nayyer, I want to launch quickly, so that I can start converting social media traffic into paid bookings.
44. As the developer, I want to avoid building custom payment and booking infrastructure, so that the MVP can ship within one week.
45. As the developer, I want the website to be mostly static content, so that it is easy to build, test, deploy, and maintain.

## Implementation Decisions

- Build the website as a Next.js application because the developer is already comfortable with Next.js.
- Use Tailwind CSS or the project's chosen styling setup to deliver a mobile-first, responsive UI quickly.
- Deploy the website to Vercel or an equivalent static-friendly Next.js host.
- Use Cal.com for booking availability, first slot selection, payment-gated confirmation, and calendar coordination.
- Use Stripe through Cal.com rather than building custom Stripe Checkout in the website.
- Create three Cal.com event types, one per package.
- Each package CTA on the website links to the corresponding Cal.com booking flow.
- In phase 1, Cal.com books only the first lesson slot for the purchased package.
- The full package purchase happens after the first slot is selected and before the slot is confirmed.
- Remaining lessons are scheduled manually by Nayyer after the first paid booking.
- The website will not require a database in phase 1.
- The website will not include user accounts or student login.
- The website will not include an admin dashboard.
- The website will include package cards, trust/benefit sections, testimonials, media, FAQ/policy content, and contact details.
- The public brand will be Driving With Nayyer.
- The instructor will be presented as Nayyer Sultana.
- The positioning will say the service is strictly for women.
- The site may say MTO Certified Instructor.
- The site will support G2 and G messaging.
- The site will mention English, Urdu, and Hindi.
- The site will say pickup/drop-off is available in selected Mississauga areas unless Nayyer confirms broader coverage.
- The phone number will be 647-716-2153.
- The email will be kooolnayyer12@gmail.com.
- Prices remain TBD in CAD until confirmed by Nayyer.
- Cancellation, reschedule, no-show, and refund policy remain TBD until confirmed by Nayyer.
- The site must avoid unsupported claims such as guaranteed pass unless Nayyer provides approved legal wording.

## Testing Decisions

- The highest-value test seam is the public booking journey: a mobile visitor lands on the homepage, understands the offer, selects a package, and reaches the correct Cal.com paid booking flow.
- Tests should focus on external behavior and user-visible outcomes, not internal component implementation.
- The homepage should be tested for correct package content, CTA presence, contact information, service positioning, and responsive rendering.
- Package CTA tests should verify that each package links to the expected Cal.com event URL.
- Accessibility checks should verify that package buttons, contact links, images, and testimonials are navigable and understandable.
- Responsive checks should cover mobile widths first because most traffic is expected from Instagram, Facebook, WhatsApp, and mobile browsing.
- Manual verification should include a Cal.com test booking flow in test mode once package prices and Stripe setup are available.
- Payment behavior should be verified in Cal.com/Stripe test mode, confirming that a slot is not considered confirmed without successful payment.
- No database or backend tests are needed for phase 1 because the website does not own booking or payment state.
- If automated tests are added, use a browser-level test for the primary page and CTA links rather than low-level component snapshots.

## Out of Scope

- Custom scheduling system.
- Custom availability database.
- Custom Stripe Checkout implementation.
- Student accounts.
- Student portal.
- Admin dashboard.
- Multi-instructor support.
- Multi-lesson scheduling for all 10 or 15 lessons.
- Package balance or lesson credit tracking.
- Refund automation.
- Cancellation automation beyond Cal.com settings.
- CRM functionality.
- SMS automation.
- Email marketing automation.
- Blog or CMS.
- SEO content expansion beyond the single-page MVP.
- Support for packages beyond the three confirmed package categories.
- Online driving course delivery.
- Full BDE course management system.

## Further Notes

Confirmed business facts:

- Brand: Driving With Nayyer.
- Instructor: Nayyer Sultana.
- Service: strictly women-only driving lessons.
- Location: Mississauga, Ontario.
- Certification wording allowed: MTO Certified Instructor.
- License goals: G2 and G.
- Languages: English, Urdu, and Hindi.
- Assets available: testimonials, photos, videos, instructor photos, car photos, and student photos.
- Public phone: 647-716-2153.
- Public email: kooolnayyer12@gmail.com.

Open business questions before launch:

- Exact prices for Package 01, Package 02, and Package 03 in CAD.
- Exact wording of each package's inclusions.
- Duration of the first booked appointment.
- Days and times available for first appointments.
- Service area for pickup/drop-off.
- Whether pickup/drop-off is free in all covered areas.
- Cancellation policy.
- Rescheduling policy.
- No-show policy.
- Refund policy.
- Required student details before confirming a paid booking.
- What students should do if they are unsure which package to choose.
- Any extra fees, conditions, or exclusions.
- Any claims or wording Nayyer wants the website to avoid.

Recommended homepage headline:

Women-only driving lessons in Mississauga

Recommended supporting copy:

Learn with Nayyer Sultana, an MTO Certified Instructor offering G2 and G training in English, Urdu, and Hindi.
