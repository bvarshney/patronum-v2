## 4cf594f - 2026-04-16 14:34:06
### update
**Author:** Harshgoyal-WebDev <138307903+Harshgoyal-WebDev@users.noreply.github.com>
**Date:** 2026-04-16 14:34:06

calendly link

---
 public/feed.xml                   | 4 ++--
 public/wp-search.json             | 2 +-
 src/components/Calendly/index.jsx | 2 +-
 3 files changed, 4 insertions(+), 4 deletions(-)

## ad9cda3 - 2026-04-09 12:19:30
### search bar fixed in the categories of blog
**Author:** Harshgoyal-WebDev <138307903+Harshgoyal-WebDev@users.noreply.github.com>
**Date:** 2026-04-09 12:19:30


---
 public/feed.xml              |  4 ++--
 public/wp-search.json        |  2 +-
 src/pages/category/[slug].js | 16 +++++++++++++---
 3 files changed, 16 insertions(+), 6 deletions(-)

## 80daeb0 - 2026-04-09 11:27:54
### update
**Author:** Harshgoyal-WebDev <138307903+Harshgoyal-WebDev@users.noreply.github.com>
**Date:** 2026-04-09 11:27:54


---
 public/feed.xml                                          | 4 ++--
 public/wp-search.json                                    | 2 +-
 src/components/PageComponents/CommunityPage/Webinars.jsx | 2 +-
 3 files changed, 4 insertions(+), 4 deletions(-)

## b51d93a - 2026-04-09 11:14:56
### update
**Author:** Harshgoyal-WebDev <138307903+Harshgoyal-WebDev@users.noreply.github.com>
**Date:** 2026-04-09 11:14:56


---
 .../google-workspace-hangout-webinar-thumbnail.png | Bin 0 -> 22932 bytes
 .../assets/community/upcoming-webinar-16-april.png | Bin 0 -> 1094965 bytes
 .../upcoming-webinar-thumbnail-16-april.png        | Bin 0 -> 1097560 bytes
 .../assets/community/webinar-thumbnail-how-to.png  | Bin 0 -> 18049 bytes
 public/feed.xml                                    |   4 +--
 public/wp-search.json                              |   2 +-
 .../CommunityPage/UpcomingWebinars.jsx             |  10 +++---
 .../PageComponents/CommunityPage/Webinars.jsx      |  35 +++++++++++----------
 8 files changed, 26 insertions(+), 25 deletions(-)

## 43ee41d - 2026-04-08 16:09:28
### slug changed and added og image
**Author:** Harshgoyal-WebDev <138307903+Harshgoyal-WebDev@users.noreply.github.com>
**Date:** 2026-04-08 16:09:28


---
 public/assets/seo/archive.webp                 | Bin 0 -> 114186 bytes
 public/feed.xml                                |   4 ++--
 public/wp-search.json                          |   2 +-
 src/components/Header/MobileNavigation.js      |   2 +-
 src/components/Header/Navbar.jsx               |   2 +-
 src/pages/{archive.js => archive-user-data.js} |   0
 src/pages/features.js                          |   2 +-
 7 files changed, 6 insertions(+), 6 deletions(-)

## 0ae2485 - 2026-04-08 16:03:04
### archive page added with assets
**Author:** Harshgoyal-WebDev <138307903+Harshgoyal-WebDev@users.noreply.github.com>
**Date:** 2026-04-08 16:03:04


---
 public/assets/features/archive/archive-storage.svg |  68 ++++++++
 public/assets/features/archive/archive-vault.svg   |  66 ++++++++
 .../features/archive/automated-offboarding.svg     |  81 ++++++++++
 .../features/archive/data-infrastructure.svg       |  85 ++++++++++
 .../assets/features/archive/email-restoration.svg  |  42 +++++
 public/assets/features/archive/future-control.svg  |  73 +++++++++
 public/assets/features/archive/granular-search.svg |  77 ++++++++++
 public/assets/features/archive/license-costs.svg   |  89 +++++++++++
 public/assets/features/archive/reduce-costs.svg    |  87 +++++++++++
 .../assets/features/archive/retention-policies.svg |  63 ++++++++
 public/assets/features/archive/video-cover.webp    | Bin 0 -> 24456 bytes
 public/assets/home/features-8.svg                  | 119 ++++++++++++++
 public/assets/menu/archive.svg                     |   4 +
 public/feed.xml                                    |   4 +-
 public/wp-search.json                              |   2 +-
 src/components/Header/MobileNavigation.js          |  13 +-
 src/components/Header/Navbar.jsx                   |   6 +
 src/components/Illustrations/Archive.jsx           | 126 +++++++++++++++
 .../PageComponents/FeaturesPage/faqData.json       |  40 +++++
 src/pages/archive.js                               | 171 +++++++++++++++++++++
 src/pages/features.js                              |   9 ++
 21 files changed, 1221 insertions(+), 4 deletions(-)

## 43ed413 - 2026-03-20 19:20:27
### upcoming webinar updated
**Author:** Harshgoyal-WebDev <138307903+Harshgoyal-WebDev@users.noreply.github.com>
**Date:** 2026-03-20 19:20:27


---
 public/assets/community/upcoming-webinar-26-march.png  | Bin 0 -> 200430 bytes
 public/feed.xml                                        |   4 ++--
 public/wp-search.json                                  |   2 +-
 .../PageComponents/CommunityPage/UpcomingWebinars.jsx  |  10 +++++-----
 4 files changed, 8 insertions(+), 8 deletions(-)

## cb09459 - 2026-03-18 12:04:01
### Add webinar image and update feeds/search
**Author:** Harshgoyal-WebDev <138307903+Harshgoyal-WebDev@users.noreply.github.com>
**Date:** 2026-03-18 12:04:01

Add upcoming webinar image (public/assets/community/upcoming-webinar-19-march.png), update RSS feed timestamps (lastBuildDate and pubDate) in public/feed.xml, and regenerate the WP search index (public/wp-search.json). Also apply related update to UpcomingWebinars.jsx to reference the new asset.

---
 public/assets/community/upcoming-webinar-19-march.png  | Bin 0 -> 184911 bytes
 public/feed.xml                                        |   4 ++--
 public/wp-search.json                                  |   2 +-
 .../PageComponents/CommunityPage/UpcomingWebinars.jsx  |  10 +++++-----
 4 files changed, 8 insertions(+), 8 deletions(-)

## 0da19f5 - 2026-03-17 18:30:27
### Add webinar thumbnails; update feeds & components
**Author:** Harshgoyal-WebDev <138307903+Harshgoyal-WebDev@users.noreply.github.com>
**Date:** 2026-03-17 18:30:27

Add two community webinar thumbnail images and update public metadata. Bump RSS feed timestamps in public/feed.xml and regenerate public/wp-search.json. Update CommunityPage webinar components (UpcomingWebinars.jsx, Webinars.jsx) and Search component to reflect the new assets and updated search/feed data.

---
 .../assets/community/dmarc-matters-thumbnail.png   | Bin 0 -> 22467 bytes
 .../google-workspace-hangout-thumbnail.png         | Bin 0 -> 21055 bytes
 public/feed.xml                                    |   4 +-
 public/wp-search.json                              |   2 +-
 .../CommunityPage/UpcomingWebinars.jsx             |   2 +-
 .../PageComponents/CommunityPage/Webinars.jsx      |  40 +++++------
 src/components/Search/index.jsx                    |  73 +++++++++++++--------
 7 files changed, 72 insertions(+), 49 deletions(-)

## a06c716 - 2026-03-13 17:34:02
### Add new blog posts to RSS feed and search index
**Author:** Harshgoyal-WebDev <138307903+Harshgoyal-WebDev@users.noreply.github.com>
**Date:** 2026-03-13 17:34:02

Add three new blog posts to public feed.xml and update public/wp-search.json. Includes new RSS <item> entries and updated feed pubDate/lastBuildDate, adjustments to some existing item pubDate values, and a regenerated wp-search.json with a new timestamp and the new posts added.

---
 public/feed.xml                                    | 35 +++++++++++++++++++---
 public/wp-search.json                              |  2 +-
 .../PageComponents/BlogPage/CategoryList.js        |  1 -
 src/components/Search/index.jsx                    | 16 +++++-----
 src/pages/blog.js                                  |  9 ++++--
 5 files changed, 47 insertions(+), 16 deletions(-)

## 8dd02f9 - 2026-03-12 15:48:58
### Add two blog posts and update feeds
**Author:** Harshgoyal-WebDev <138307903+Harshgoyal-WebDev@users.noreply.github.com>
**Date:** 2026-03-12 15:48:58

Publish two new blog posts and update site indexes. Update public/feed.xml (timestamps and two new items) and regenerate public/wp-search.json with the new posts. Remove several -v2 page variants in favor of canonical pages and apply small UI/layout tweaks to onboarding components (FeatureDetailCard, FeatureDetailTitle), ContactSharing illustration, and SectionBreak.

---
 public/feed.xml                                    |  23 +-
 public/wp-search.json                              |   2 +-
 .../ContactTrial/OnBoarding/FeatureDetailCard.jsx  |   2 +-
 .../ContactTrial/OnBoarding/FeatureDetailTitle.jsx |   4 +-
 src/components/Illustrations/ContactSharing.jsx    | 569 +++++++++++++++++----
 src/components/PageLayout/SectionBreak.js          |   2 +-
 src/pages/email-signature-management-v2.js         | 217 --------
 src/pages/email-signature-management.js            | 377 +++++++-------
 src/pages/google-contact-sharing-v2.js             | 177 -------
 src/pages/google-contact-sharing.js                | 207 ++++----
 src/pages/google-drive-compliance-v2.js            | 168 ------
 src/pages/google-drive-compliance.js               | 196 +++----
 src/pages/google-drive-management-v2.js            | 181 -------
 src/pages/google-drive-management.js               | 208 ++++----
 src/pages/on-boarding-v2.js                        | 209 --------
 src/pages/on-boarding.js                           | 389 +++++++-------
 src/pages/organisational-chart-v2.js               | 141 -----
 src/pages/organisational-chart.js                  | 142 ++---
 src/pages/pricing-for-business-v2.js               |  41 --
 19 files changed, 1284 insertions(+), 1971 deletions(-)

## 66df20f - 2026-03-11 18:29:50
### Add DMARC blog post and update backup components
**Author:** Harshgoyal-WebDev <138307903+Harshgoyal-WebDev@users.noreply.github.com>
**Date:** 2026-03-11 18:29:50

Publish the new blog post 'Why DMARC Matters: Protecting Your Brand From Business Email Compromise in Google Workspace' by adding an item to public/feed.xml and prepending it to public/wp-search.json (updated generated/pubDate timestamps). Update BackupCard components in ContactTrial and FeaturesPage (src/components/...) and remove the deprecated page src/pages/google-workspace-backup-v2.js.

---
 public/feed.xml                                    |  13 +-
 public/wp-search.json                              |   2 +-
 .../ContactTrial/OnBoarding/BackupCard.jsx         | 513 ++++++++++++---------
 .../PageComponents/FeaturesPage/BackupCard.jsx     |  67 +--
 src/pages/google-workspace-backup-v2.js            | 184 --------
 5 files changed, 339 insertions(+), 440 deletions(-)

## 036426d - 2026-02-06 12:18:52
### Add on-boarding v2 pages and illustrations
**Author:** Harshgoyal-WebDev <138307903+Harshgoyal-WebDev@users.noreply.github.com>
**Date:** 2026-02-06 12:18:52

Add new on-boarding V2 UI: onboarding components (FeatureDetailCard, FeatureDetailTitle, FeaturesDetailInfo, GoogleDriveCompliance, OnBoardingVideoV2, TransformV2, BackupCard) and many new illustration components. Introduce new V2 pages (on-boarding-v2, trial, multiple product V2 pages) and add SmoothSlider/TestimonialSmoothy while removing legacy testimonial sliders. Update several existing pages/components and tweak hero SVG/assets. Swap front-end carousel dependency by adding `smooothy` in package.json and removing references to `swiper`, plus related component adjustments.

---
 package-lock.json                                  |   65 +-
 package.json                                       |    2 +-
 .../heroSections/google-drive-compliance.svg       |   99 +-
 .../assets/heroSections/organisational-chart.svg   |    2 +-
 public/assets/heroSections/partner-with-us.svg     |   85 +-
 src/components/ContactTrial/BusinessPricingV2.jsx  |   33 +-
 src/components/ContactTrial/EducationPricingV2.jsx |  190 +++
 .../ContactTrial/OnBoarding/BackupCard.jsx         |  230 ++++
 .../ContactTrial/OnBoarding/FeatureDetailCard.jsx  |  100 ++
 .../ContactTrial/OnBoarding/FeatureDetailTitle.jsx |   55 +
 .../ContactTrial/OnBoarding/FeaturesDetailInfo.jsx |   66 +
 .../OnBoarding/GoogleDriveCompliance.jsx           |    1 +
 .../ContactTrial/OnBoarding/OnBoardingVideoV2.jsx  |  111 ++
 .../ContactTrial/OnBoarding/TransformV2.jsx        |   35 +
 src/components/Illustrations/AboutHero.jsx         |  609 +++++++++
 src/components/Illustrations/BlogHero.jsx          |  102 ++
 src/components/Illustrations/ContactSharing.jsx    |  108 ++
 src/components/Illustrations/CookiePolicyHero.jsx  |   89 ++
 .../Illustrations/EmailSignatureManagement.jsx     |  134 ++
 src/components/Illustrations/FeaturesHero.jsx      | 1300 ++++++++++++++++++++
 .../Illustrations/GoogleDriveCompliance.jsx        |  187 +++
 .../Illustrations/GoogleDriveManagement.jsx        |   91 ++
 .../Illustrations/GoogleWorkspaceBackup.jsx        |  166 +++
 src/components/Illustrations/LegalHero.jsx         |   79 ++
 src/components/Illustrations/OnBoarding.jsx        |  144 +++
 .../Illustrations/OrganisationalChart.jsx          |  191 +++
 src/components/Illustrations/PartnerWithUsHero.jsx |  137 +++
 .../Illustrations/PatronumForBusinessHero.jsx      |  169 +++
 .../Illustrations/PatronumForEducationHero.jsx     |  615 +++++++++
 src/components/Illustrations/PatronumForHrHero.jsx |  713 +++++++++++
 .../Illustrations/PatronumForSalesHero.jsx         |   86 ++
 .../Illustrations/PatronumForUsersHero.jsx         |  443 +++++++
 src/components/Illustrations/PrivacyPolicy.jsx     |   55 +
 src/components/Illustrations/RegisterAnOppHero.jsx |  139 +++
 src/components/Illustrations/SecurityHero.jsx      |  102 ++
 src/components/Illustrations/SupportHero.jsx       |   84 ++
 src/components/Illustrations/Usecases.jsx          |  397 ++++++
 src/components/Illustrations/WebinarHero.jsx       |  562 +++++++++
 src/components/LandingPage/PriceDropDownV2.js      |   55 +
 src/components/LandingPage/PricingCardV2.jsx       |   97 ++
 src/components/MicroConversionModal/index.jsx      |   25 +-
 .../PageComponents/AboutPage/MediaLogos.jsx        |    2 -
 .../PageComponents/BlogPage/BlogLayout.js          |    2 -
 src/components/PageComponents/BlogPage/PostCard.js |  145 ++-
 .../PageComponents/CommunityPage/Features.jsx      |  142 +--
 .../PageComponents/CommunityPage/Group.jsx         |   84 +-
 .../PageComponents/CommunityPage/Hero.jsx          |  230 ++--
 .../PageComponents/CommunityPage/Hosting.jsx       |   59 -
 .../CommunityPage/Testimonial/Slider.js            |  100 --
 .../CommunityPage/UpcomingWebinars.jsx             |    4 +-
 .../PageComponents/CommunityPage/Webinars.jsx      |  290 +++--
 .../PageComponents/HomePage/UseCasesMobile.js      |  410 ++++--
 .../PageComponents/UseCasePage/UseCaseCard.js      |   14 +-
 src/components/PageLayout/FeatureCard/index.jsx    |   27 +-
 src/components/PageLayout/SectionBreak.js          |    6 +-
 src/components/PageLayout/SectionBreakSmall.js     |    6 +-
 src/components/PageLayout/Testimonial/Slider.js    |  136 --
 src/components/PageLayout/Testimonial/index.js     |    8 +-
 .../PageLayout/VideoPlayer/LazyIframe.js           |    5 +-
 .../PricingPagesComp/EducationPricing.jsx          |   29 +-
 src/components/SideMenu/index.js                   |    2 +-
 src/components/SmoothSlider.jsx                    |   96 ++
 src/components/TestimonialSmoothy.jsx              |  252 ++++
 src/pages/[slug].js                                |  202 ++-
 src/pages/about-us.js                              |  342 ++---
 src/pages/blog.js                                  |  145 ++-
 src/pages/category/[slug].js                       |    3 -
 src/pages/cookie-policy.js                         |   25 +-
 src/pages/email-signature-management-v2.js         |  217 ++++
 src/pages/features.js                              |  331 ++---
 src/pages/free-trial.js                            |    5 +-
 src/pages/google-contact-sharing-v2.js             |  177 +++
 src/pages/google-drive-compliance-v2.js            |  168 +++
 src/pages/google-drive-management-v2.js            |  181 +++
 src/pages/google-workspace-backup-v2.js            |  184 +++
 src/pages/google-workspace-community.js            |  164 +--
 src/pages/index.js                                 |    7 +-
 src/pages/legal.js                                 |   93 +-
 src/pages/on-boarding-v2.js                        |  209 ++++
 src/pages/organisational-chart-v2.js               |  141 +++
 src/pages/partner-with-us.js                       |  198 +--
 src/pages/patronum-for-business.js                 |  137 ++-
 src/pages/patronum-for-education.js                |  160 +--
 src/pages/patronum-for-hr.js                       |  160 +--
 src/pages/patronum-for-sales-marketing.js          |  157 +--
 src/pages/patronum-for-users.js                    |  147 ++-
 src/pages/pricing-for-business-v2.js               |   41 +
 src/pages/pricing-for-education.js                 |   58 +-
 src/pages/privacy-policy.js                        | 1170 ++++++++++--------
 src/pages/register-an-opportunity.js               |   94 +-
 src/pages/roi-calculater.js                        |    5 +-
 src/pages/roi-calculator.js                        |    4 +-
 src/pages/security-and-compliance.js               |   36 +-
 src/pages/support.js                               |  195 +--
 src/pages/trial.js                                 |  263 ++++
 src/pages/use-cases.js                             |  203 +--
 src/pages/webinars.js                              |  422 ++++---
 src/styles/globals.css                             |   36 +
 98 files changed, 13054 insertions(+), 3028 deletions(-)

## 3a256f0 - 2026-02-02 13:01:30
### update
**Author:** Harshgoyal-WebDev <138307903+Harshgoyal-WebDev@users.noreply.github.com>
**Date:** 2026-02-02 13:01:30


---
 package-lock.json                                  |  14 +-
 src/components/ContactTrial/BusinessPricingV2.jsx  | 174 +++++++++++++
 .../ContactTrial/ContactPageTrialForm.jsx          | 245 +++++++++++++++++
 src/components/ContactTrial/FaqSection.js          | 124 +++++++++
 src/components/ContactTrial/FormSection.jsx        | 133 ++++++++++
 src/components/ContactTrial/Hero.jsx               | 290 +++++++++++++++++++++
 src/components/ContactTrial/PricePage/Pricing.js   | 115 ++++++++
 .../ContactTrial/PricePage/PricingCard.js          |  31 +++
 .../ContactTrial/PricePage/ProductFeature.js       | 226 ++++++++++++++++
 src/components/Illustrations/ContactHero.jsx       | 125 +++++++++
 .../Illustrations/PricingBusinessHero.jsx          | 105 ++++++++
 .../Illustrations/PricingEducationHero.jsx         | 115 ++++++++
 src/components/Illustrations/PricingHero.jsx       | 110 ++++++++
 src/components/Illustrations/SocialIcons.jsx       |  56 ++++
 src/components/Roi/RoiBreakDownCards.jsx           |  49 ++++
 src/lib/currency-data.js                           |  14 +
 src/pages/contact-us.js                            | 131 +++-------
 src/pages/pricing-for-business.js                  |  43 +--
 src/pages/pricing-for-education.js                 |  32 ++-
 src/pages/pricing.js                               |  39 +--
 src/pages/roi-calculater.js                        | 108 ++++++++
 21 files changed, 2122 insertions(+), 157 deletions(-)

## 359d271 - 2026-01-23 19:37:58
### Add ROI Calculator link to mobile navigation
**Author:** Hitesh Bhardwaj <bhardwajhitesh09@gmail.com>
**Date:** 2026-01-23 19:37:58

Added a new 'ROI Calculator' entry to the resources dropdown in the mobile navigation. Increased the dropdown height to accommodate the new item. Also updated .gitignore to include public/feed.xml.

---
 .gitignore                                |  2 +-
 package-lock.json                         | 14 ++++++++++++--
 src/components/Header/MobileNavigation.js | 13 ++++++++++++-
 3 files changed, 25 insertions(+), 4 deletions(-)

## bd844b6 - 2026-01-23 19:28:38
### Update UpcomingWebinars.jsx
**Author:** Harshgoyal-WebDev <138307903+Harshgoyal-WebDev@users.noreply.github.com>
**Date:** 2026-01-23 19:28:38


---
 src/components/PageComponents/CommunityPage/UpcomingWebinars.jsx | 4 ++--
 1 file changed, 2 insertions(+), 2 deletions(-)

## 403df0a - 2026-01-23 19:23:36
### Rename BreakdownCard to BreakCard and update imports
**Author:** Harshgoyal-WebDev <138307903+Harshgoyal-WebDev@users.noreply.github.com>
**Date:** 2026-01-23 19:23:36

Renamed the BreakdownCard component file to BreakCard and updated the import in BreakDown.jsx to reflect the new filename. Also commented out an unused LinkButton import.

---
 src/components/Roi/{BreakDownCard.jsx => BreakCard.jsx} | 0
 src/components/Roi/BreakDown.jsx                        | 5 +++--
 2 files changed, 3 insertions(+), 2 deletions(-)

## 6c8c00b - 2026-01-23 19:19:21
### Add ROI calculator feature and related assets
**Author:** Harshgoyal-WebDev <138307903+Harshgoyal-WebDev@users.noreply.github.com>
**Date:** 2026-01-23 19:19:21

Introduces a new ROI calculator page with supporting components, UI elements, and SVG/image assets. Updates navigation and community webinar components to integrate the new feature. Adds dependencies for @radix-ui/react-select and recharts to support new UI and charting needs.

---
 package-lock.json                                  | 985 +++++++++++++++++++--
 package.json                                       |   2 +
 .../community/how-to-webinar-thumbnail-18-dec.png  | Bin 0 -> 7155 bytes
 .../assets/community/upcoming-webinar-29-jan.png   | Bin 0 -> 188176 bytes
 public/assets/community/webinar-22-jan.jpeg        | Bin 0 -> 18738 bytes
 public/assets/menu/roi-calc.svg                    |  11 +
 public/assets/menu/roi-calculator-icon.svg         |  11 +
 public/assets/menu/roi-calculator.svg              |   1 +
 public/assets/roi/churn-rate.svg                   |   5 +
 public/assets/roi/compiliance.svg                  |   3 +
 public/assets/roi/currency.svg                     |   7 +
 public/assets/roi/no-employees.svg                 |   3 +
 src/components/Header/DesktopNavigation.js         |   7 +
 src/components/Header/Navbar.jsx                   |   6 +
 src/components/Layout/index.jsx                    |   3 +
 src/components/MicroConversionModal/index.jsx      | 104 +++
 .../CommunityPage/UpcomingWebinars.jsx             |   6 +-
 .../PageComponents/CommunityPage/Webinars.jsx      |  15 +-
 src/components/Roi/BreakDown.jsx                   | 205 +++++
 src/components/Roi/BreakDownCard.jsx               |  49 +
 src/components/Roi/Hero.jsx                        | 398 +++++++++
 src/components/Roi/roi-calculator.html             | 300 +++++++
 src/components/ui/card.jsx                         |  53 ++
 src/components/ui/chart.jsx                        | 313 +++++++
 src/components/ui/dialog.jsx                       |  10 +-
 src/components/ui/input.jsx                        |   2 +-
 src/components/ui/select.jsx                       | 120 +++
 src/lib/roi-math.js                                |  57 ++
 src/pages/roi-calculator.js                        | 276 ++++++
 src/styles/globals.css                             |   2 +-
 30 files changed, 2867 insertions(+), 87 deletions(-)

## 3c4253b - 2026-01-22 15:12:30
### Add cache and security headers
**Author:** Hitesh Bhardwaj <bhardwajhitesh09@gmail.com>
**Date:** 2026-01-22 15:12:30

Add cache and security headers

---
 .../add-google-directory-contacts-on-io.pdf        |    Bin 11708759 -> 667447 bytes
 ...mazing-things-you-didnt-know-about-patronum.pdf |    Bin 9220934 -> 1813813 bytes
 .../how-to-restore-your-google-contacts.pdf        | 309225 ++----------------
 ...-share-google-contacts-to-other-gmail-users.pdf |    Bin 20761204 -> 2175167 bytes
 vercel.json                                        |     61 +
 5 files changed, 21935 insertions(+), 287351 deletions(-)

## 2061bac - 2026-01-22 12:12:27
### Comment out reb2b script and update Vercel comments
**Author:** Hitesh Bhardwaj <bhardwajhitesh09@gmail.com>
**Date:** 2026-01-22 12:12:27

The reb2b script in _app.js has been commented out, likely for debugging or removal purposes. Updated comments to clarify Vercel Speed Insights and Analytics sections.

---
 src/pages/_app.js | 10 +++++-----
 1 file changed, 5 insertions(+), 5 deletions(-)

## d292864 - 2026-01-08 18:47:20
### Add cross-fetch dependency and update content files
**Author:** Hitesh Bhardwaj <bhardwajhitesh09@gmail.com>
**Date:** 2026-01-08 18:47:20

Added 'cross-fetch' to package.json and package-lock.json for improved fetch compatibility. Updated public/feed.xml and public/wp-search.json with new dates and copyright, and made changes to src/lib/apollo-client.js and src/pages/[slug].js.

---
 package-lock.json        | 66 ++++++++++++++++++++++++++++++++++++++++++++++--
 package.json             |  1 +
 public/feed.xml          |  6 ++---
 public/wp-search.json    |  2 +-
 src/lib/apollo-client.js | 17 ++++++++-----
 src/pages/[slug].js      | 63 +++++++++++++++++++++++++++++++--------------
 6 files changed, 124 insertions(+), 31 deletions(-)

## 5503b45 - 2026-01-08 11:45:56
### Merge branch 'main' of https://github.com/bvarshney/patronum-v2
**Author:** Harshgoyal-WebDev <138307903+Harshgoyal-WebDev@users.noreply.github.com>
**Date:** 2026-01-08 11:45:56


---
## e3afb14 - 2026-01-08 11:45:54
### Update PricingCard.js
**Author:** Harshgoyal-WebDev <138307903+Harshgoyal-WebDev@users.noreply.github.com>
**Date:** 2026-01-08 11:45:54


---
 src/components/PageComponents/HomePage/PricingCard.js | 9 +++++----
 1 file changed, 5 insertions(+), 4 deletions(-)

## af8d448 - 2026-01-08 10:34:30
### Remove extra newline in MenuItem component
**Author:** Hitesh Bhardwaj <bhardwajhitesh09@gmail.com>
**Date:** 2026-01-08 10:34:30

Deleted an unnecessary blank line in the MenuItem component for improved code cleanliness.

---
 src/components/ui/navbar-menu.jsx | 1 -
 1 file changed, 1 deletion(-)

## 70bb064 - 2026-01-05 11:16:41
### Update index.js
**Author:** Harshgoyal-WebDev <138307903+Harshgoyal-WebDev@users.noreply.github.com>
**Date:** 2026-01-05 11:16:41


---
 src/components/Footer/index.js | 2 +-
 1 file changed, 1 insertion(+), 1 deletion(-)
