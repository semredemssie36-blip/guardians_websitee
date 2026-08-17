/**
 * Guardians Diagnostic Center — Blog Article Data
 * Full article content for all 12 articles.
 * Each article has a unique slug used for routing: /blog/:slug
 */

export const articles = [
  {
    id: 1,
    slug: 'why-regular-health-screenings-matter',
    title: 'Why Regular Health Screenings Are So Important',
    category: 'Prevention',
    excerpt:
      'Preventive health screenings can detect conditions like diabetes, hypertension, and certain cancers before symptoms appear — giving you the best chance of effective treatment.',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    date: 'August 2026',
    readTime: '5 min read',
    author: 'Guardians Medical Team',
    tags: ['Screening', 'Prevention', 'Wellness'],
    featured: true,
    sections: [
      {
        heading: 'What Is Health Screening?',
        body: `Health screening is the process of checking for diseases or conditions in people who have no symptoms. The goal is to catch problems early — when they are much easier to treat — before they cause serious harm.\n\nUnlike a visit to the doctor when you are already sick, screening is proactive. It is about staying one step ahead of potential health problems rather than reacting to them after they develop.`,
      },
      {
        heading: 'Why Early Detection Matters',
        body: `Many of the most serious health conditions — including type 2 diabetes, hypertension, high cholesterol, and some cancers — develop silently. A person can have dangerously high blood pressure or blood sugar for years without feeling any different.\n\nBy the time symptoms appear, the condition is often significantly advanced. Early detection through screening means:\n\n• Treatment is simpler and less invasive\n• Recovery rates are dramatically higher\n• Long-term complications are far less likely\n• Overall treatment costs are lower`,
      },
      {
        heading: 'Who Should Get Screened?',
        body: `Regular health screening is recommended for everyone, but certain groups benefit most:\n\n• Adults over 40 — the risk of chronic disease increases significantly with age\n• People with a family history of heart disease, diabetes, or cancer\n• Individuals with a sedentary lifestyle or unhealthy diet\n• Those who are overweight or obese\n• Anyone with existing risk factors such as high stress, smoking, or hypertension\n\nEven healthy young adults benefit from a baseline screening — establishing your normal values makes it easier to detect changes in the future.`,
      },
      {
        heading: 'What Does a Basic Screening Include?',
        body: `A standard health screening at Guardians Diagnostic Center covers the key markers of overall health:\n\n• Complete Blood Count (CBC) — checks your blood cells for signs of infection, anaemia, or other disorders\n• Blood Glucose — screens for diabetes and prediabetes\n• Lipid Profile — measures cholesterol and triglycerides to assess heart disease risk\n• Liver Function Tests — evaluates the health of your liver\n• Kidney Function Tests — checks how well your kidneys are filtering waste\n• Urinalysis — detects kidney problems, diabetes, and infections\n\nMore comprehensive packages also include thyroid function, cardiac markers, chest X-ray, ultrasound, and ECG.`,
      },
      {
        heading: 'How Often Should You Screen?',
        body: `General guidelines suggest:\n\n• Adults 18–39: every 2–3 years if healthy, annually if risk factors exist\n• Adults 40–60: annually\n• Adults over 60: annually or more frequently as advised by your doctor\n\nFor employees, pre-employment screening is standard. Many organizations now offer annual employee health screening as part of workplace health programs — this is something Guardians supports through our corporate health packages.`,
      },
      {
        heading: 'Taking the First Step',
        body: `The most important thing you can do for your long-term health is to start. A single screening appointment at Guardians takes 1.5–3 hours depending on the package chosen. The results give you a clear, actionable picture of your health — and the peace of mind that comes with knowing.\n\nDon't wait for symptoms. Book a health screening appointment today.`,
      },
    ],
  },

  {
    id: 2,
    slug: 'understanding-blood-test-results',
    title: 'Understanding Your Blood Test Results',
    category: 'Diagnostic Info',
    excerpt:
      'A complete blood count report can look overwhelming at first. Here is a plain-language guide to the most common values, what they measure, and what they mean for your health.',
    image: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    date: 'August 2026',
    readTime: '8 min read',
    author: 'Guardians Medical Team',
    tags: ['Laboratory', 'Blood Test', 'Results'],
    featured: true,
    sections: [
      {
        heading: 'Why Blood Tests Are So Valuable',
        body: `Blood carries information about almost every organ and system in your body. A well-chosen panel of blood tests can reveal the health of your liver, kidneys, thyroid, heart, immune system, and more — all from a small sample collected in minutes.\n\nUnderstanding what your results mean helps you have more informed conversations with your doctor and take ownership of your health.`,
      },
      {
        heading: 'Complete Blood Count (CBC)',
        body: `The CBC is the most common blood test and measures the cells in your blood:\n\n• Haemoglobin (Hb) — carries oxygen. Low values indicate anaemia. Normal: men 13–17 g/dL, women 12–15 g/dL\n• White Blood Cells (WBC) — fight infection. High values may indicate infection or inflammation. Normal: 4,000–11,000 cells/µL\n• Platelets — help blood clot. Low values can cause bleeding risk. Normal: 150,000–400,000/µL\n• Red Blood Cells (RBC) — carry oxygen around the body. Normal ranges vary by sex and age\n• Mean Corpuscular Volume (MCV) — size of red blood cells, helps identify the type of anaemia`,
      },
      {
        heading: 'Blood Glucose',
        body: `Glucose is the sugar your cells use for energy. Blood glucose tests screen for diabetes and prediabetes:\n\n• Fasting glucose below 5.6 mmol/L (100 mg/dL) — normal\n• Fasting glucose 5.6–6.9 mmol/L — prediabetes (at risk)\n• Fasting glucose 7.0 mmol/L or above on two occasions — diabetes\n\nHbA1c measures your average blood glucose over the past 2–3 months. It is more reliable than a single fasting glucose test:\n\n• Below 5.7% — normal\n• 5.7–6.4% — prediabetes\n• 6.5% or above — diabetes`,
      },
      {
        heading: 'Lipid Profile (Cholesterol)',
        body: `A lipid profile measures different types of fats in your blood and is used to assess your risk of heart disease:\n\n• Total Cholesterol — ideally below 5.2 mmol/L\n• LDL ("bad" cholesterol) — lower is better; above 3.4 mmol/L raises concern\n• HDL ("good" cholesterol) — higher is better; above 1.0 mmol/L for men, 1.3 mmol/L for women\n• Triglycerides — a type of fat stored in blood; normal below 1.7 mmol/L\n\nHigh LDL and triglycerides combined with low HDL significantly increase the risk of heart attack and stroke.`,
      },
      {
        heading: 'Liver and Kidney Function',
        body: `Liver function tests (LFT) measure enzymes and proteins that indicate how well your liver is working:\n\n• ALT and AST — liver enzymes elevated in liver damage, fatty liver, or medication side effects\n• Bilirubin — elevated in liver or bile duct problems\n• Albumin — a protein; low levels suggest poor liver function or malnutrition\n\nKidney function tests (RFT/Urea & Creatinine) measure:\n\n• Creatinine — waste product filtered by kidneys; elevated levels indicate reduced kidney function\n• Urea — another waste product; elevated with kidney problems or dehydration\n• eGFR — estimated Glomerular Filtration Rate; indicates how well kidneys are filtering`,
      },
      {
        heading: 'What to Do With Your Results',
        body: `A single abnormal result is not always cause for alarm — results must be interpreted in the context of your symptoms, history, medications, and lifestyle. Always discuss your results with a doctor.\n\nAt Guardians, we offer a doctor consultation with all health screening packages. If you have individual test results you would like reviewed, book a general consultation appointment and our team will walk you through what each value means for your specific situation.`,
      },
    ],
  },

  {
    id: 3,
    slug: 'how-to-prepare-for-lab-tests',
    title: 'How to Prepare for Common Lab Tests',
    category: 'Health Tips',
    excerpt:
      'Proper preparation before a blood test or urine test significantly affects the accuracy of results. Learn what to do — and what to avoid — the night before your test.',
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    date: 'August 2026',
    readTime: '6 min read',
    author: 'Guardians Medical Team',
    tags: ['Preparation', 'Lab Tests', 'Tips'],
    featured: true,
    sections: [
      {
        heading: 'Why Preparation Matters',
        body: `The accuracy of many laboratory tests depends directly on how well you prepare. A single cup of coffee or a late meal can shift your blood glucose by 20–30%, making the difference between a normal and abnormal result.\n\nPoor preparation does not just waste your time — it can lead to unnecessary follow-up tests, false diagnoses, or missed conditions. A few simple steps before your appointment make your results reliable.`,
      },
      {
        heading: 'Fasting Requirements',
        body: `Fasting means not eating or drinking anything except water for a set period before your test:\n\n• Blood glucose (fasting) — 8–12 hours fasting required\n• HbA1c — no fasting needed\n• Lipid profile — 9–12 hours fasting required\n• Liver function tests — 8–10 hours fasting required\n• Kidney function tests — no fasting needed\n• Complete Blood Count — no fasting needed\n• Thyroid function (TSH) — no fasting needed\n• Hepatitis B & C / HIV — no fasting needed\n\nWhen in doubt, fast for 10 hours. This covers the majority of common tests. Always confirm with us when booking.`,
      },
      {
        heading: 'What You Can and Cannot Have While Fasting',
        body: `✓ You CAN have:\n• Water — drink normally, stay well hydrated\n• Regular medications — unless your doctor specifically says to hold them\n• Plain black coffee (for some tests only — confirm with us first)\n\n✗ You CANNOT have:\n• Any food — including small snacks or sweets\n• Tea, juice, or any flavoured drinks\n• Coffee with milk or sugar\n• Alcohol (avoid for 24 hours before a lipid profile)\n• Chewing gum`,
      },
      {
        heading: 'Medications and Supplements',
        body: `Do not stop any prescribed medication without your doctor's guidance. Many medications can affect certain test values, but stopping them abruptly can be dangerous.\n\nInform our staff of everything you are taking, including:\n• Prescription medications\n• Over-the-counter drugs (aspirin, antihistamines, etc.)\n• Herbal supplements and vitamins\n• Hormonal contraceptives\n• Insulin or diabetes medications\n\nOur team will note this on your request form so the interpreting doctor can factor it into the results.`,
      },
      {
        heading: 'The Day of Your Test',
        body: `On the morning of your blood test:\n\n1. Drink a full glass of water before leaving home — hydration makes veins easier to access and improves sample quality\n2. Wear loose, short-sleeved or easily rolled-up clothing\n3. Arrive a few minutes early to complete registration\n4. Bring your patient ID, referral letter (if applicable), and previous results if relevant\n5. Relax — anxiety can temporarily elevate certain values. Sit quietly for a few minutes before your sample is taken`,
      },
      {
        heading: 'For Urine and Stool Tests',
        body: `Urine test (urinalysis):\n• Collect the mid-stream portion — let the first few seconds pass, then collect\n• Use the sterile container provided by our laboratory\n• Do not collect during menstruation if possible\n• Refrigerate the sample if there is a delay before bringing it in\n\nStool test:\n• Collect in the sterile container provided\n• Bring the sample as fresh as possible — within 2 hours if at room temperature\n• Avoid antibiotics for 1 week before if testing for bacteria or parasites\n• Inform us if you have taken any laxatives recently`,
      },
    ],
  },

  {
    id: 4,
    slug: 'what-is-ultrasound-and-when-do-you-need-one',
    title: 'What Is an Ultrasound and When Do You Need One?',
    category: 'Diagnostic Info',
    excerpt:
      'Ultrasound is one of the most versatile and safe diagnostic tools available. Find out how it works, what conditions it helps diagnose, and what to expect during the procedure.',
    image: 'https://images.unsplash.com/photo-1551601651-2a8555f1a136?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    date: 'August 2026',
    readTime: '7 min read',
    author: 'Guardians Medical Team',
    tags: ['Ultrasound', 'Imaging', 'Diagnostic'],
    featured: false,
    sections: [
      {
        heading: 'How Ultrasound Works',
        body: `Ultrasound imaging — also called sonography — uses high-frequency sound waves to create real-time images of the inside of your body. A handheld device called a transducer sends sound waves into your body. When those waves bounce off organs and tissues, they return as echoes that are converted into images on a screen.\n\nUnlike X-ray or CT scans, ultrasound uses no radiation at all. It is completely safe for pregnant women, children, and anyone who needs repeated imaging.`,
      },
      {
        heading: 'Types of Ultrasound Available at Guardians',
        body: `• Abdominal Ultrasound — evaluates the liver, gallbladder, spleen, kidneys, pancreas, and abdominal aorta. Used for abdominal pain, jaundice, kidney stones, and liver disease\n\n• Pelvic Ultrasound — examines the uterus, ovaries, and bladder in women; the bladder and prostate in men. Used for pelvic pain, irregular periods, fibroids, ovarian cysts\n\n• Obstetric Ultrasound — monitors foetal development during pregnancy. Confirms gestational age, position, and foetal wellbeing\n\n• Thyroid Ultrasound — evaluates thyroid nodules, goitre, and thyroid gland size\n\n• Breast Ultrasound — assesses lumps or abnormalities detected on physical examination\n\n• Renal Ultrasound — specifically evaluates kidney size, structure, and signs of obstruction or stones\n\n• Scrotal Ultrasound — evaluates testicular pain, swelling, or lumps`,
      },
      {
        heading: 'When Should You Get an Ultrasound?',
        body: `Your doctor may recommend an ultrasound if you experience:\n\n• Unexplained abdominal or pelvic pain\n• Nausea, vomiting, or bloating that doesn't resolve\n• Abnormal liver function test results\n• A palpable lump or mass anywhere in the body\n• Changes in urinary frequency or difficulty urinating\n• Irregular menstrual cycles or suspected ovarian cysts\n• Pregnancy monitoring at any stage\n• Thyroid enlargement or neck swelling\n• Follow-up after an abnormal blood test result`,
      },
      {
        heading: 'What to Expect During the Procedure',
        body: `An ultrasound at Guardians takes 15–40 minutes depending on the area being scanned. Here is what happens:\n\n1. You will lie on a comfortable examination table\n2. A warm, water-based gel is applied to the skin over the area to be scanned\n3. The sonographer moves the transducer gently over your skin\n4. Images appear in real time on a monitor\n5. You may be asked to hold your breath briefly for certain images\n6. The gel is wiped off at the end — it does not stain\n\nThe procedure is painless. You may feel slight pressure from the transducer, but nothing more.`,
      },
      {
        heading: 'Preparation by Scan Type',
        body: `• Abdominal ultrasound — fast for 4–6 hours before the scan\n• Pelvic ultrasound — drink 4–6 glasses of water 1 hour before and arrive with a full bladder\n• Obstetric (first trimester) — full bladder required\n• Thyroid, breast, renal — no preparation needed\n\nWear comfortable, loose clothing. We will advise you of specific preparation when you book your appointment.`,
      },
      {
        heading: 'Receiving Your Results',
        body: `Your ultrasound images are reviewed by our qualified sonographer and radiologist. A written report is prepared and is typically ready the same day. The report describes the findings in clinical detail and highlights any abnormalities.\n\nIf you would like a doctor to explain the findings to you, book a general consultation alongside your ultrasound — our team will be happy to walk you through the results.`,
      },
    ],
  },

  {
    id: 5,
    slug: 'importance-of-knowing-your-cholesterol',
    title: 'The Importance of Knowing Your Cholesterol Levels',
    category: 'Prevention',
    excerpt:
      'High cholesterol has no symptoms — but it quietly raises your risk of heart attack and stroke. Here is why getting a lipid profile test matters and what the numbers mean.',
    image: 'https://images.unsplash.com/photo-1584515933487-779824d29309?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    date: 'August 2026',
    readTime: '6 min read',
    author: 'Guardians Medical Team',
    tags: ['Cholesterol', 'Heart Health', 'Prevention'],
    featured: false,
    sections: [
      {
        heading: 'The Silent Risk',
        body: `Cholesterol is a waxy, fat-like substance produced by your liver and found in certain foods. Your body needs it to build cells and produce hormones — but too much of certain types can be dangerous.\n\nHigh cholesterol causes no symptoms. You cannot feel it. Many people are diagnosed only after experiencing a heart attack or stroke. The only way to know your cholesterol levels is to get tested.`,
      },
      {
        heading: 'Types of Cholesterol',
        body: `A lipid profile blood test measures four key values:\n\n• Total Cholesterol — the overall amount of cholesterol in your blood. Ideally below 5.2 mmol/L\n\n• LDL Cholesterol ("bad" cholesterol) — deposits on artery walls, causing narrowing and blockage. Lower is better. Ideally below 2.6 mmol/L for high-risk individuals\n\n• HDL Cholesterol ("good" cholesterol) — removes LDL from arteries and carries it to the liver for disposal. Higher is better. Above 1.0 mmol/L for men, 1.3 mmol/L for women\n\n• Triglycerides — another type of blood fat. Elevated by a diet high in sugar and refined carbohydrates. Ideally below 1.7 mmol/L`,
      },
      {
        heading: 'Risk Factors for High Cholesterol',
        body: `You are at higher risk if you:\n\n• Eat a diet high in saturated fat, trans fat, or processed food\n• Are physically inactive\n• Are overweight or obese\n• Smoke — which lowers HDL and damages arteries\n• Have a family history of high cholesterol or early heart disease\n• Have diabetes or hypothyroidism\n• Are over 40 years old\n\nIn Ethiopia, a diet high in injera, meat, and butter — combined with low physical activity — creates a significant cholesterol risk profile for many adults.`,
      },
      {
        heading: 'What Happens When Cholesterol Is Too High?',
        body: `Over years, excess LDL cholesterol builds up in the walls of arteries — a process called atherosclerosis. This causes arteries to narrow and harden. Reduced blood flow to the heart leads to:\n\n• Angina (chest pain on exertion)\n• Heart attack — when a clot blocks a narrowed coronary artery\n• Stroke — when a clot blocks blood flow to the brain\n• Peripheral artery disease — reduced circulation in the legs\n\nThe process happens silently over decades, which is exactly why screening before symptoms appear is so valuable.`,
      },
      {
        heading: 'How to Improve Your Cholesterol',
        body: `Lifestyle changes are the first line of treatment:\n\n• Reduce saturated and trans fats — cut down on fatty meat, full-fat dairy, and fried foods\n• Increase fibre — oats, legumes, vegetables, and fruit help lower LDL\n• Exercise regularly — 30 minutes of moderate activity most days raises HDL\n• Lose excess weight — even a 5–10% weight loss significantly improves your lipid profile\n• Quit smoking — within weeks, HDL begins to improve\n\nWhen lifestyle changes are insufficient, medication (statins) may be prescribed by your doctor.`,
      },
      {
        heading: 'Get Your Lipid Profile at Guardians',
        body: `A lipid profile test at Guardians requires 9–12 hours fasting. It is included in all our health screening packages and is also available as a standalone test.\n\nKnowing your numbers is the first step. From there, your doctor can give you a personalised plan to protect your heart.`,
      },
    ],
  },

  {
    id: 6,
    slug: 'when-should-you-get-an-ecg',
    title: 'When Should You Get an ECG?',
    category: 'Diagnostic Info',
    excerpt:
      'An electrocardiogram is a quick, painless test that records your heart\'s electrical activity. Learn when doctors recommend one and what conditions it can detect.',
    image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    date: 'August 2026',
    readTime: '5 min read',
    author: 'Guardians Medical Team',
    tags: ['ECG', 'Cardiology', 'Heart'],
    featured: false,
    sections: [
      {
        heading: 'What Is an ECG?',
        body: `An electrocardiogram (ECG or EKG) is a simple, painless test that records the electrical activity of your heart. Every heartbeat is triggered by an electrical signal — the ECG captures these signals and displays them as a waveform on paper or screen.\n\nThe test takes about 10 minutes and is completely non-invasive. Small adhesive electrodes are placed on your chest, arms, and legs. No electricity enters your body — the ECG only records the signals your heart already produces.`,
      },
      {
        heading: 'What an ECG Can Detect',
        body: `A 12-lead resting ECG can identify:\n\n• Heart rate and rhythm abnormalities (arrhythmias)\n• Atrial fibrillation (irregular, rapid heartbeat)\n• Bradycardia (abnormally slow heart rate)\n• Tachycardia (abnormally fast heart rate)\n• Evidence of a previous or current heart attack\n• Ischaemia — reduced blood supply to the heart muscle\n• Conduction abnormalities (bundle branch blocks)\n• Chamber enlargement\n• Effects of medications on the heart\n• Electrolyte imbalances affecting cardiac function`,
      },
      {
        heading: 'When Should You Get an ECG?',
        body: `An ECG is recommended if you experience any of the following:\n\n• Chest pain or tightness, especially with exertion\n• Shortness of breath at rest or with minimal activity\n• Palpitations — a racing, pounding, or irregular heartbeat\n• Dizziness or fainting episodes\n• Extreme fatigue without an obvious cause\n• Swelling in the legs (which can indicate heart failure)\n\nAn ECG is also routinely recommended as part of:\n• Executive or comprehensive health screening packages\n• Pre-employment medicals for certain job categories\n• Pre-operative assessment before surgery\n• Monitoring for patients on cardiac medications`,
      },
      {
        heading: 'Limitations of a Resting ECG',
        body: `A standard resting ECG captures your heart at one moment in time. Some arrhythmias or ischaemic changes only appear during physical activity or occur intermittently.\n\nIf your resting ECG is normal but symptoms persist, your doctor may recommend additional cardiac testing — such as a stress ECG (exercise test) or Holter monitoring. Always discuss your symptoms fully with your doctor so they can recommend the most appropriate investigation.`,
      },
      {
        heading: 'Preparing for Your ECG at Guardians',
        body: `Preparation is minimal:\n\n• Avoid heavy physical exercise for at least 30 minutes before\n• Do not apply lotions, oils, or creams to the chest on the day of the test\n• Wear a two-piece outfit for easy chest access\n• Inform the technician of any cardiac medications or implanted devices\n• Arrive relaxed — rest quietly for a few minutes before the recording begins\n\nResults at Guardians are reviewed by our cardiologist and are typically ready within 1–2 hours. The report details your heart rhythm, rate, and any notable findings.`,
      },
    ],
  },

  {
    id: 7,
    slug: 'diabetes-screening-who-should-get-tested',
    title: 'Diabetes Screening: Who Should Get Tested and When',
    category: 'Prevention',
    excerpt:
      'Type 2 diabetes often develops silently for years. Understanding your risk factors and getting screened regularly is one of the most impactful steps you can take for your health.',
    image: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    date: 'August 2026',
    readTime: '7 min read',
    author: 'Guardians Medical Team',
    tags: ['Diabetes', 'Screening', 'Blood Glucose'],
    featured: false,
    sections: [
      {
        heading: 'The Diabetes Epidemic in Africa',
        body: `Diabetes is one of the fastest-growing health crises in sub-Saharan Africa. In Ethiopia, an estimated 5–8% of adults have diabetes — and a large proportion are undiagnosed. The rapid shift toward more sedentary lifestyles, urbanisation, and diets higher in refined carbohydrates has driven a significant increase in type 2 diabetes across all age groups.\n\nEarly diagnosis is critical. The longer diabetes goes undetected, the greater the damage to blood vessels, kidneys, eyes, and nerves.`,
      },
      {
        heading: 'Types of Diabetes',
        body: `• Type 1 Diabetes — an autoimmune condition where the immune system destroys insulin-producing cells. Requires daily insulin. Typically diagnosed in childhood or early adulthood.\n\n• Type 2 Diabetes — the most common type (90%+ of cases). The body either does not produce enough insulin or becomes resistant to it. Strongly linked to lifestyle factors and family history.\n\n• Gestational Diabetes — develops during pregnancy and usually resolves after delivery, but significantly increases the mother's risk of developing type 2 diabetes later.\n\n• Prediabetes — blood glucose higher than normal but not yet diabetic. Highly reversible with lifestyle changes.`,
      },
      {
        heading: 'Risk Factors for Type 2 Diabetes',
        body: `You are at elevated risk if you:\n\n• Are overweight or have excess abdominal fat\n• Are physically inactive\n• Have a parent or sibling with type 2 diabetes\n• Have previously been diagnosed with prediabetes\n• Have a history of gestational diabetes\n• Have high blood pressure or high cholesterol\n• Are over 40 years of age\n• Have polycystic ovary syndrome (PCOS)\n\nIn Ethiopia, additional risk factors include frequent consumption of injera and sugar-sweetened beverages, and a rapid transition from rural to sedentary urban lifestyles.`,
      },
      {
        heading: 'Diabetes Tests Available at Guardians',
        body: `• Fasting Blood Glucose — requires 8–12 hours fasting. The standard screening test:\n  - Normal: below 5.6 mmol/L\n  - Prediabetes: 5.6–6.9 mmol/L\n  - Diabetes: 7.0 mmol/L or above\n\n• HbA1c (Glycated Haemoglobin) — reflects average blood glucose over 2–3 months. No fasting required. Highly reliable:\n  - Normal: below 5.7%\n  - Prediabetes: 5.7–6.4%\n  - Diabetes: 6.5% or above\n\n• Random Blood Glucose — taken at any time, without fasting. A value of 11.1 mmol/L or above with symptoms suggests diabetes\n\nBoth the fasting glucose and HbA1c are included in our health screening packages.`,
      },
      {
        heading: 'How Often Should You Get Screened?',
        body: `• Adults with no risk factors: every 3 years from age 40\n• Adults with risk factors: annually from age 35 (or earlier if multiple risk factors exist)\n• Anyone with prediabetes: every 6–12 months\n• Pregnant women: screened at first antenatal visit and again at 24–28 weeks\n\nIf you are unsure about your risk level, a single screening appointment gives you a clear picture and allows early action.`,
      },
      {
        heading: 'If You Are Diagnosed With Prediabetes',
        body: `Prediabetes is not a life sentence — it is an opportunity. Studies show that losing 5–7% of body weight and increasing physical activity to 150 minutes per week reduces the risk of progressing to type 2 diabetes by over 50%.\n\nAt Guardians, if your screening shows prediabetic values, our doctor will discuss your results and provide clear guidance on lifestyle changes and the importance of regular monitoring.`,
      },
    ],
  },

  {
    id: 8,
    slug: 'understanding-thyroid-function-tests',
    title: 'Understanding Thyroid Function Tests',
    category: 'Diagnostic Info',
    excerpt:
      'TSH, T3, T4 — thyroid tests can be confusing. This guide explains what each marker measures, what abnormal results might indicate, and when a thyroid test is recommended.',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    date: 'August 2026',
    readTime: '8 min read',
    author: 'Guardians Medical Team',
    tags: ['Thyroid', 'Hormones', 'Lab Tests'],
    featured: false,
    sections: [
      {
        heading: 'What Does the Thyroid Do?',
        body: `The thyroid is a small butterfly-shaped gland at the front of your neck. Despite its size, it controls an enormous amount of your body's function — it produces hormones that regulate your metabolism, heart rate, body temperature, weight, mood, and energy levels.\n\nWhen the thyroid is underactive (hypothyroidism) or overactive (hyperthyroidism), it affects virtually every system in the body — often in ways that are vague and easily attributed to other causes.`,
      },
      {
        heading: 'The Three Key Thyroid Markers',
        body: `• TSH (Thyroid Stimulating Hormone) — produced by the pituitary gland in the brain. TSH tells the thyroid how much hormone to produce. It is the most sensitive test for thyroid problems:\n  - Normal range: 0.4–4.0 mIU/L\n  - High TSH = underactive thyroid (hypothyroidism)\n  - Low TSH = overactive thyroid (hyperthyroidism)\n\n• Free T4 (Thyroxine) — the main hormone produced by the thyroid. Converted to T3 in tissues:\n  - Normal: 12–22 pmol/L\n  - Low T4 + high TSH = hypothyroidism\n  - High T4 + low TSH = hyperthyroidism\n\n• Free T3 (Triiodothyronine) — the active form of thyroid hormone:\n  - Normal: 3.1–6.8 pmol/L\n  - Measured when T4 levels are inconclusive`,
      },
      {
        heading: 'Symptoms of Hypothyroidism (Underactive Thyroid)',
        body: `Hypothyroidism is the most common thyroid disorder and is more prevalent in women:\n\n• Persistent fatigue and weakness\n• Unexplained weight gain despite normal diet\n• Feeling cold even in warm weather\n• Constipation\n• Dry skin and brittle hair or nails\n• Slow heart rate (bradycardia)\n• Depression and poor concentration ("brain fog")\n• Heavy or irregular menstrual periods\n• Puffy face, especially around the eyes\n\nSymptoms often develop slowly over years, making hypothyroidism easy to miss without testing.`,
      },
      {
        heading: 'Symptoms of Hyperthyroidism (Overactive Thyroid)',
        body: `• Unexplained weight loss despite increased appetite\n• Rapid or irregular heartbeat (palpitations)\n• Anxiety, nervousness, or irritability\n• Feeling excessively hot or sweating more than usual\n• Trembling hands\n• Diarrhoea or frequent bowel movements\n• Difficulty sleeping\n• Eye changes (in Graves' disease — the most common cause)\n\nHyperthyroidism can cause serious cardiac complications if left untreated.`,
      },
      {
        heading: 'When Should You Get Thyroid Tests?',
        body: `A thyroid function test is recommended if you have:\n\n• Any of the symptoms listed above\n• A family history of thyroid disease\n• A history of radiation to the neck\n• Taken lithium, amiodarone, or other thyroid-affecting medications\n• Unexplained changes in weight, mood, or energy\n• A goitre (swelling at the front of the neck)\n• Infertility or recurrent miscarriage\n• Completed a comprehensive health screening package\n\nThyroid tests are included in our Comprehensive Screening, Executive, Women's Health, and Senior Citizen packages.`,
      },
      {
        heading: 'Treatment and Monitoring',
        body: `Both hypothyroidism and hyperthyroidism are very manageable with treatment:\n\n• Hypothyroidism is treated with daily thyroxine tablets (levothyroxine). Most people need to take this lifelong, but it is simple and highly effective.\n\n• Hyperthyroidism can be treated with medications, radioactive iodine, or surgery, depending on the cause and severity.\n\nOnce on treatment, thyroid function must be monitored regularly — typically every 6–12 months — with repeat TSH and T4 testing. Guardians can support this monitoring as part of ongoing health management.`,
      },
    ],
  },

  {
    id: 9,
    slug: 'healthy-lifestyle-tips-preventing-chronic-disease',
    title: 'Healthy Lifestyle Tips for Preventing Chronic Disease',
    category: 'Wellness',
    excerpt:
      'Chronic diseases like heart disease, diabetes, and hypertension are largely preventable. Simple, consistent lifestyle changes can dramatically reduce your risk.',
    image: 'https://images.unsplash.com/photo-1551190822-a9333d879b1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    date: 'August 2026',
    readTime: '6 min read',
    author: 'Guardians Medical Team',
    tags: ['Lifestyle', 'Chronic Disease', 'Wellness'],
    featured: false,
    sections: [
      {
        heading: 'The Burden of Chronic Disease',
        body: `Non-communicable diseases (NCDs) — heart disease, stroke, type 2 diabetes, and hypertension — are now the leading cause of death globally, including across Africa. In Ethiopia, NCDs account for an increasing proportion of illness and premature death.\n\nThe encouraging reality is that most chronic diseases are largely preventable. Up to 80% of heart disease and type 2 diabetes cases could be avoided through healthy lifestyle choices. You do not need an expensive gym membership or a perfect diet — small, consistent habits make an enormous difference over time.`,
      },
      {
        heading: '1. Move More',
        body: `Physical inactivity is one of the strongest risk factors for nearly every chronic disease. Regular movement:\n\n• Lowers blood pressure and cholesterol\n• Improves insulin sensitivity and helps prevent diabetes\n• Reduces stress and improves sleep\n• Strengthens the heart muscle\n• Helps maintain a healthy weight\n\nThe goal is 150 minutes of moderate activity per week — roughly 30 minutes on most days. This does not have to be formal exercise. Walking, cycling, carrying water, farming, and dancing all count. The key is consistency.`,
      },
      {
        heading: '2. Eat a Balanced Diet',
        body: `No food is completely forbidden, but the overall pattern of your diet matters enormously:\n\n• Increase vegetables, legumes, and whole grains — fibre lowers cholesterol and stabilises blood sugar\n• Reduce refined carbohydrates and sugar — excess sugar drives weight gain and diabetes\n• Choose lean proteins — fish, legumes, eggs, and low-fat dairy\n• Use less cooking oil and avoid fried foods\n• Reduce salt — high salt intake raises blood pressure significantly\n• Drink more water and less sugar-sweetened beverages\n\nTraditional Ethiopian cuisine — with its legumes, vegetables, and injera — can form a healthy base when portion sizes and fat content are managed.`,
      },
      {
        heading: '3. Maintain a Healthy Weight',
        body: `Excess weight — particularly around the abdomen — is directly linked to hypertension, type 2 diabetes, heart disease, and several cancers. Even modest weight loss of 5–10% of body weight significantly improves blood pressure, blood glucose, and cholesterol.\n\nWeight management is most effective when diet and activity changes are made together. Focus on sustainable, gradual progress rather than extreme diets.`,
      },
      {
        heading: '4. Stop Smoking and Limit Alcohol',
        body: `Smoking damages almost every organ in the body and is the leading preventable cause of cancer, heart disease, and stroke. There is no safe level of smoking.\n\nBenefits of quitting begin within hours:\n• Blood pressure starts to fall within 20 minutes\n• Carbon monoxide levels normalise within 24 hours\n• Heart attack risk begins to drop within 1 year\n\nAlcohol in large amounts raises blood pressure, damages the liver, and contributes to weight gain. If you drink, keep it moderate — and avoid binge drinking entirely.`,
      },
      {
        heading: '5. Manage Stress',
        body: `Chronic stress drives elevated cortisol levels, which raises blood pressure, blood sugar, and promotes inflammation. Over time, unmanaged stress is a significant risk factor for heart disease and mental health conditions.\n\nPractical stress management includes:\n• Regular physical activity\n• Adequate sleep (7–8 hours per night)\n• Social connection and community support\n• Prayer, meditation, or mindfulness practices\n• Setting realistic expectations and boundaries at work`,
      },
      {
        heading: '6. Get Screened Regularly',
        body: `Lifestyle change works best when combined with regular monitoring. Blood pressure, blood glucose, and cholesterol can all be abnormal without symptoms — and catching them early gives you the chance to act before damage occurs.\n\nAt Guardians, our health screening packages provide a complete annual health picture. Book yours today and make prevention a priority.`,
      },
    ],
  },

  {
    id: 10,
    slug: 'what-to-expect-during-first-lab-visit',
    title: 'What to Expect During Your First Lab Visit',
    category: 'Health Tips',
    excerpt:
      'Visiting a diagnostic center for the first time can feel uncertain. Here is a step-by-step walkthrough of what to bring, what happens when you arrive, and what comes next.',
    image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    date: 'August 2026',
    readTime: '5 min read',
    author: 'Guardians Medical Team',
    tags: ['First Visit', 'Patient Guide', 'Tips'],
    featured: false,
    sections: [
      {
        heading: 'Before You Arrive',
        body: `Preparation before your visit makes everything smoother:\n\n• Confirm what preparation is needed — fasting, full bladder, or nothing special. We will tell you when you book.\n• Bring your valid photo ID (national ID, passport, or driving licence)\n• Bring your referral letter or prescription if your doctor sent you\n• Bring any previous test results that are relevant\n• Wear loose, comfortable clothing — especially loose-sleeved if you are having a blood test\n• If you are on medications, bring a list or the packaging`,
      },
      {
        heading: 'Step 1: Arriving and Registration',
        body: `When you arrive at Guardians, you will be greeted at the reception. Our staff will:\n\n1. Ask for your ID and any referral letter\n2. Register your personal details — name, contact number, date of birth\n3. Ask about the test or service you need\n4. Confirm any preparation requirements and check you have met them\n5. Issue you a patient receipt with your name and the tests requested\n\nPlease keep your patient receipt — you will need it to collect your results.`,
      },
      {
        heading: 'Step 2: Waiting and Being Called',
        body: `After registration, you will be asked to wait in our reception area. Our waiting area is comfortable and you will be called by name when it is your turn.\n\nWaiting times vary depending on how busy we are and how many tests you need. For simple blood tests, the wait is typically short. For health screening packages, we schedule appointments to minimise waiting.\n\nIf you have an appointment, you will generally be seen promptly at your scheduled time.`,
      },
      {
        heading: 'Step 3: The Sample Collection',
        body: `For a blood test, a qualified phlebotomist will:\n\n1. Confirm your name and the tests to be collected\n2. Ask you to sit comfortably and roll up your sleeve\n3. Clean the area with an alcohol swab\n4. Apply a tourniquet briefly to make the vein more visible\n5. Insert a thin needle to collect the required tubes of blood — this takes about 30 seconds\n6. Apply gentle pressure and a small plaster\n\nMost people feel a brief sting when the needle enters. The procedure takes 5–10 minutes in total. If you feel faint or unwell, tell the phlebotomist immediately.`,
      },
      {
        heading: 'Step 4: After Collection',
        body: `After your samples are collected:\n\n• Keep the plaster on for at least 30 minutes\n• Avoid heavy lifting with the arm used for at least 2 hours\n• If you were fasting, you can eat and drink normally after collection\n• For other services (X-ray, ultrasound, ECG), you will be directed to the appropriate department\n\nFor health screening packages, multiple departments may be visited in sequence. Our staff will guide you through each step.`,
      },
      {
        heading: 'Step 5: Receiving Your Results',
        body: `Your results will be ready within the timeframe confirmed at registration. We will call you when they are ready.\n\nTo collect your results:\n• Bring your patient receipt\n• Bring your valid photo ID\n• If you are sending someone else, they must bring a written authorisation from you and their own ID\n\nIf you have questions about your results, a doctor consultation is available — just ask at reception when you collect.`,
      },
    ],
  },

  {
    id: 11,
    slug: 'corporate-health-programs-benefits-for-employers',
    title: 'Corporate Health Programs: Benefits for Employers',
    category: 'Wellness',
    excerpt:
      'Investing in employee health screening reduces absenteeism, improves morale, and keeps your workforce productive. Here is why more Ethiopian companies are making it a priority.',
    image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    date: 'August 2026',
    readTime: '6 min read',
    author: 'Guardians Medical Team',
    tags: ['Corporate', 'Workplace Health', 'Productivity'],
    featured: false,
    sections: [
      {
        heading: 'Why Workplace Health Matters',
        body: `Employees are an organisation's most important asset. When workers are unwell, fatigued, or managing undetected chronic conditions, productivity suffers — quietly and cumulatively.\n\nResearch consistently shows that organisations that invest in employee health see significant returns: lower absenteeism, higher engagement, reduced staff turnover, and fewer costly insurance claims. Workplace health programs are no longer a luxury — they are a strategic investment.`,
      },
      {
        heading: 'The Cost of Undetected Illness at Work',
        body: `Many employees are working with undiagnosed hypertension, diabetes, anaemia, or thyroid disorders — all of which affect concentration, energy, and performance. Because these conditions have no symptoms in the early stages, the employee often does not know.\n\nLeft undetected:\n• Hypertension increases stroke and heart attack risk\n• Diabetes damages kidneys, eyes, and nerves over years\n• Anaemia causes persistent fatigue and reduced output\n• Thyroid disorders affect mood, memory, and physical capacity\n\nA single annual health screening can detect all of these conditions before they become serious.`,
      },
      {
        heading: 'Benefits of a Corporate Health Program',
        body: `1. Reduced absenteeism — employees with detected and managed conditions take fewer unplanned sick days\n\n2. Early intervention — catching conditions early means simpler, cheaper treatment and faster recovery\n\n3. Legal compliance — many industries in Ethiopia require periodic employee health checks and pre-employment medicals\n\n4. Improved morale — employees who feel that their employer cares about their health are more engaged and loyal\n\n5. Reduced long-term healthcare costs — preventing chronic disease progression is far less costly than treating advanced conditions\n\n6. Attraction and retention of talent — workplace health benefits are increasingly valued by job seekers`,
      },
      {
        heading: 'What Guardians Offers for Organisations',
        body: `Guardians provides comprehensive corporate health programs tailored to your organisation's size and needs:\n\n• Pre-Employment Screening — full medical clearance for new hires\n• Annual Employee Health Checks — routine monitoring of your team's health\n• Occupational Health Services — hazard-specific testing for high-risk industries\n• Periodic Checkups — scheduled throughout the year\n• On-Site Mobile Services — our team comes to your premises for groups of 50+\n• Confidential individual reports — every employee receives their own private results\n• Group summary statistics — for HR planning, with no individual data disclosed`,
      },
      {
        heading: 'Who We Work With',
        body: `We serve organisations of all types and sizes:\n\n• Private companies and corporations\n• NGOs and international organisations\n• Schools, universities, and colleges\n• Factories and manufacturing companies\n• Construction companies\n• Government institutions and agencies\n• Hospitals and healthcare facilities\n\nWe offer competitive group pricing with discounts based on group size. Minimum group of 10 employees for our Business Package.`,
      },
      {
        heading: 'Getting Started',
        body: `Getting a corporate health program in place is straightforward. Contact our corporate team:\n\n• Submit an inquiry through our Corporate Services page\n• Call us at +251 911 234 567\n• Email us at corporate@guardians-diagnostic.com\n\nWe will respond within 1 business day, assess your organisation's needs, and provide a tailored quote. Our team handles all logistics so your HR department can focus on what they do best.`,
      },
    ],
  },

  {
    id: 12,
    slug: 'pre-employment-medical-what-tests-are-required',
    title: 'Pre-Employment Medical: What Tests Are Required?',
    category: 'Health Tips',
    excerpt:
      'Most employers in Ethiopia require a pre-employment medical clearance. We break down exactly which tests are typically included and how to prepare for your appointment.',
    image: 'https://images.unsplash.com/photo-1551601651-2a8555f1a136?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    date: 'August 2026',
    readTime: '5 min read',
    author: 'Guardians Medical Team',
    tags: ['Pre-Employment', 'Screening', 'Workplace'],
    featured: false,
    sections: [
      {
        heading: 'What Is a Pre-Employment Medical?',
        body: `A pre-employment medical examination is a health assessment required by many employers before officially hiring a new employee. It serves two purposes:\n\n1. To confirm that the candidate is physically fit for the specific duties of the role\n2. To document the employee's health baseline at the time of joining — relevant for occupational health management and any future workers' compensation claims\n\nIn Ethiopia, pre-employment medicals are standard across many industries and are often a formal regulatory requirement.`,
      },
      {
        heading: 'Standard Tests Included',
        body: `While requirements vary by employer and industry, a standard pre-employment screening at Guardians typically includes:\n\n• Physical Examination — general assessment of overall health by a doctor\n• Chest X-Ray — screens for tuberculosis, lung disease, and cardiac abnormalities\n• Complete Blood Count (CBC) — checks for anaemia and infection\n• Blood Glucose — screens for undetected diabetes\n• Urinalysis — detects kidney problems, diabetes, or infections\n• HIV Screening — included in most Ethiopian pre-employment requirements\n• Hepatitis B Screening — standard for most industries\n• Stool Examination — required for food handlers and certain healthcare roles\n\nA formal medical certificate is issued upon completion, stamped and signed by our doctor.`,
      },
      {
        heading: 'Industry-Specific Requirements',
        body: `Some industries require additional testing:\n\n• Food handling (restaurants, catering, food processing) — stool culture for enteric pathogens, hepatitis A\n• Healthcare workers — hepatitis B vaccination status, TB screening, MMR status\n• Construction and manufacturing — musculoskeletal assessment, hearing test, vision test\n• Security and armed forces — fitness assessment, drug screening\n• Aviation and transport — vision testing, drug and alcohol screening\n• Mining and heavy industry — respiratory function tests, heavy metal exposure screening\n\nWhen booking, tell us your industry so we can ensure the correct panel is included.`,
      },
      {
        heading: 'What to Bring',
        body: `For your pre-employment screening appointment:\n\n• Valid photo ID (national ID, passport, or driving licence) — required\n• Your employer's pre-employment medical form or requirements letter — if provided\n• A referral letter from your HR department — if applicable\n• Previous medical records — only if relevant to the specific requirements\n• Payment — confirm the fee when booking\n\nFasting is required for the blood glucose test — 8 hours minimum. Bring water and a small snack for after the collection.`,
      },
      {
        heading: 'How Long Does It Take?',
        body: `A standard pre-employment screening at Guardians takes approximately 2–2.5 hours including:\n\n• Registration and documentation\n• Blood sample collection\n• Chest X-ray\n• Urine sample collection\n• Physical examination by doctor\n\nResults are typically available the same day or the following morning. The official medical certificate is issued once all results are reviewed and signed by our doctor.`,
      },
      {
        heading: 'Book Your Pre-Employment Medical',
        body: `Guardians issues pre-employment medical certificates that are accepted by most employers and institutions across Ethiopia.\n\nTo book:\n• Call us at +251 911 234 567\n• WhatsApp us at +251 911 234 567\n• Book online through our Appointment page\n\nWalk-ins are welcome, but an appointment ensures you are seen at a specific time without waiting. Group pre-employment screenings (for multiple new hires) can also be arranged — contact our corporate team for group bookings.`,
      },
    ],
  },
];

/** Quick lookup by slug */
export const getArticleBySlug = (slug) =>
  articles.find((a) => a.slug === slug) ?? null;

/** Quick lookup by id */
export const getArticleById = (id) =>
  articles.find((a) => a.id === Number(id)) ?? null;
