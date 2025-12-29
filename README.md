# 🎄 El Gordo 2025 - The VIP Lottery Checker

**A serverless, ad-free, real-time lottery tracker built on AWS.**


![App Screenshot](./docs/screenshot.png)

---

## The Story Behind the Project
I've lived in Spain for 5 years, and buying tickets for *El Gordo* (The Christmas Lottery) is a huge tradition for me and my friends.

However, the experience of checking numbers on December 22nd is usually frustrating. Official sites often crash due to traffic or are flooded with intrusive ads and cookie banners.

I started the **AWS re/Start** program about 6 weeks ago and am currently studying for my **Cloud Practitioner** certification. I realized I already had enough tools to fix this problem.

I built this project to challenge myself and give my friends a "VIP Experience":
* **No Ads.**
* **No Cookie Banners.**
* **No Crashes.**

## Key Features
* **VIP Experience:** A clean, "Royal-themed" interface with zero distractions.
* **Resilient:** Hosted on **AWS Serverless** infrastructure, meaning it scales automatically if 10 or 10,000 people use it.
* **Real-Time:** Connects directly to the official *El País* API for live results.
* **Privacy-First:** No tracking, no cookies, no data collection.

## Technical Architecture
I used this project to apply the concepts I'm learning in class and through my own self-study.

* **Frontend:** HTML5, CSS3, Vanilla JavaScript.
* **Storage:** **Amazon S3** (Static Website Hosting).
* **CDN:** **Amazon CloudFront** (caching content at Edge Locations for low latency).
* **CI/CD:** **AWS CodePipeline** connected to GitHub for automated deployments.

---
*Built with 🎄 spirit by **Mohamed Aly** in Barcelona.*

> **Status: Archived (Dec 2025)**
> This project is no longer maintained. For the updated Serverless implementation, see: [el-nino-lottery](https://github.com/NoENoG/el-nino-lottery).
---
