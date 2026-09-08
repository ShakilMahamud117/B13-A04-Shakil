# 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?# 
**Ans:** getElementById আইডি দিয়ে ১টি এলিমেন্ট ধরে। getElementsByClassName ক্লাসের সব এলিমেন্টকে নেয়। querySelector প্রথম ম্যাচ করা CSS সিলেক্টর নেয় এবং querySelectorAll সবকটি সিলেক্টরকে NodeList হিসেবে দেয়।

# 2. How do you create and insert a new element into the DOM? 
**Ans:** প্রথমে একটা div ক্রিয়েট করতে হবে JS file এ document.createElement ইউজ করে, তারপর সেখানে `` দিয়ে মাল্টিলাইন HTML কোড লিখতে হবে। এরপর appendChild ব্যবহার করে এড করতে হবে।

# 3. What is Event Bubbling? And how does it work? 
**Ans:** যখন HTML-এর কোনো চাইল্ড (Child) এলিমেন্টে কোনো ইভেন্ট (যেমন: click) ঘটে, তখন সেই ইভেন্টটি কেবল ওই চাইল্ড এলিমেন্টেই সীমাবদ্ধ না থেকে বাবল (Bubbles)-এর মতো ধীরে ধীরে তার প্যারেন্ট, গ্র্যান্ডপ্যারেন্ট হয়ে একদম উপরের document এবং window পর্যন্ত ছড়িয়ে পড়ে।

# 4. What is Event Delegation in JavaScript? Why is it useful? 
**Ans:** Event Delegation হলো JavaScript-এর একটি কৌশল, যার মাধ্যমে প্রতিটি আলাদা Child এলিমেন্টে Event Listener না বসিয়ে, তাদের একটি সাধারণ Parent এলিমেন্টে একটিমাত্র Event Listener ব্যবহার করে সব চাইল্ডের ইভেন্ট ম্যানেজ করা হয়।

# 5. What is the difference between preventDefault() and stopPropagation() methods? 
**Ans:** preventDefault() এবং stopPropagation() দুটোই JavaScript-এর ইভেন্ট হ্যান্ডলিংয়ে ব্যবহার করা হয়, stopPropagation() ইভেন্টের উপরে বাবলিং (Event Bubbling) হওয়া বন্ধ করে আর preventDefault() ব্রাউজারের ডিফল্ট আচরণ (Default Action) বন্ধ করে।
