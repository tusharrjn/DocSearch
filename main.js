document.addEventListener("DOMContentLoaded", () => {
    const doctorList = document.getElementById("doctor-list");

    const fetchDoctors = async () => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve([
                    {
                        name: "Dr. Ayesha Mehta",
                        specialty: "Cardiologist",
                        experience: 12,
                        fee: 800,
                        image: "https://randomuser.me/api/portraits/women/44.jpg"
                    },
                    {
                        name: "Dr. Vikram Rao",
                        specialty: "Dermatologist",
                        experience: 9,
                        fee: 500,
                        image: "https://randomuser.me/api/portraits/men/33.jpg"
                    },
                    {
                        name: "Dr. Neha Sharma",
                        specialty: "Pediatrician",
                        experience: 15,
                        fee: 600,
                        image: "https://randomuser.me/api/portraits/women/65.jpg"
                    },
                    {
                        name: "Dr. Ramesh Iyer",
                        specialty: "Orthopedic",
                        experience: 20,
                        fee: 1000,
                        image: "https://randomuser.me/api/portraits/men/55.jpg"
                    },
                    {
                        name: "Dr. Shruti Bansal",
                        specialty: "Gynecologist",
                        experience: 11,
                        fee: 700,
                        image: "https://randomuser.me/api/portraits/women/12.jpg"
                    },
                    {
                        name: "Dr. Aman Khanna",
                        specialty: "Neurologist",
                        experience: 13,
                        fee: 1200,
                        image: "https://randomuser.me/api/portraits/men/21.jpg"
                    },
                    {
                        name: "Dr. Suresh Verma",
                        specialty: "Gastroenterologist",
                        experience: 16,
                        fee: 850,
                        image: "https://randomuser.me/api/portraits/men/48.jpg"
                    },
                    {
                        name: "Dr. Priya Singh",
                        specialty: "Ophthalmologist",
                        experience: 10,
                        fee: 700,
                        image: "https://randomuser.me/api/portraits/women/20.jpg"
                    },
                    {
                        name: "Dr. Rohit Kapoor",
                        specialty: "Endocrinologist",
                        experience: 14,
                        fee: 950,
                        image: "https://randomuser.me/api/portraits/men/42.jpg"
                    },
                    {
                        name: "Dr. Maya Desai",
                        specialty: "Urologist",
                        experience: 18,
                        fee: 900,
                        image: "https://randomuser.me/api/portraits/women/19.jpg"
                    },
                    {
                        name: "Dr. Sanjay Gupta",
                        specialty: "Psychiatrist",
                        experience: 22,
                        fee: 1100,
                        image: "https://randomuser.me/api/portraits/men/60.jpg"
                    },
                    {
                        name: "Dr. Anjali Reddy",
                        specialty: "Pulmonologist",
                        experience: 7,
                        fee: 650,
                        image: "https://randomuser.me/api/portraits/women/15.jpg"
                    },
                    {
                        name: "Dr. Akash Yadav",
                        specialty: "Rheumatologist",
                        experience: 8,
                        fee: 800,
                        image: "https://randomuser.me/api/portraits/men/5.jpg"
                    },
                    {
                        name: "Dr. Simran Kaur",
                        specialty: "Nephrologist",
                        experience: 12,
                        fee: 750,
                        image: "https://randomuser.me/api/portraits/women/16.jpg"
                    },
                    {
                        name: "Dr. Harish Kumar",
                        specialty: "Oncologist",
                        experience: 15,
                        fee: 1500,
                        image: "https://randomuser.me/api/portraits/men/22.jpg"
                    },
                    {
                        name: "Dr. Tanya Arora",
                        specialty: "Radiologist",
                        experience: 10,
                        fee: 950,
                        image: "https://randomuser.me/api/portraits/women/33.jpg"
                    },
                    {
                        name: "Dr. Aditya Singh",
                        specialty: "Plastic Surgeon",
                        experience: 12,
                        fee: 1300,
                        image: "https://randomuser.me/api/portraits/men/28.jpg"
                    },
                    {
                        name: "Dr. Pooja Rathi",
                        specialty: "ENT Specialist",
                        experience: 9,
                        fee: 600,
                        image: "https://randomuser.me/api/portraits/women/26.jpg"
                    },
                    {
                        name: "Dr. Karan Mehta",
                        specialty: "Orthopedic Surgeon",
                        experience: 14,
                        fee: 1000,
                        image: "https://randomuser.me/api/portraits/men/38.jpg"
                    },
                    {
                        name: "Dr. Neeraj Malhotra",
                        specialty: "Vascular Surgeon",
                        experience: 20,
                        fee: 1250,
                        image: "https://randomuser.me/api/portraits/men/36.jpg"
                    },
                    {
                        name: "Dr. Aishwarya Rao",
                        specialty: "Dentist",
                        experience: 11,
                        fee: 500,
                        image: "https://randomuser.me/api/portraits/women/43.jpg"
                    },
                    {
                        name: "Dr. Rajesh Patel",
                        specialty: "Family Medicine",
                        experience: 19,
                        fee: 850,
                        image: "https://randomuser.me/api/portraits/men/32.jpg"
                    },
                    {
                        name: "Dr. Shikha Verma",
                        specialty: "Dietitian",
                        experience: 6,
                        fee: 450,
                        image: "https://randomuser.me/api/portraits/women/34.jpg"
                    },
                    {
                        name: "Dr. Naveen Kumar",
                        specialty: "Acupuncturist",
                        experience: 17,
                        fee: 750,
                        image: "https://randomuser.me/api/portraits/men/24.jpg"
                    },
                    {
                        name: "Dr. Aarti Mehta",
                        specialty: "Homeopath",
                        experience: 13,
                        fee: 600,
                        image: "https://randomuser.me/api/portraits/women/23.jpg"
                    },
                    {
                        name: "Dr. Javed Akhtar",
                        specialty: "Neurosurgeon",
                        experience: 20,
                        fee: 1500,
                        image: "https://randomuser.me/api/portraits/men/30.jpg"
                    },
                    {
                        name: "Dr. Priyanka Joshi",
                        specialty: "General Physician",
                        experience: 5,
                        fee: 400,
                        image: "https://randomuser.me/api/portraits/women/37.jpg"
                    },
                    {
                        name: "Dr. Mohit Soni",
                        specialty: "Geriatrician",
                        experience: 8,
                        fee: 850,
                        image: "https://randomuser.me/api/portraits/men/20.jpg"
                    },
                    {
                        name: "Dr. Kavita Sharma",
                        specialty: "Immunologist",
                        experience: 14,
                        fee: 1100,
                        image: "https://randomuser.me/api/portraits/women/40.jpg"
                    },
                    {
                        name: "Dr. Rajeev Verma",
                        specialty: "Endocrinologist",
                        experience: 22,
                        fee: 1000,
                        image: "https://randomuser.me/api/portraits/men/18.jpg"
                    },
                    {
                        name: "Dr. Maya Kapoor",
                        specialty: "Gastroenterologist",
                        experience: 12,
                        fee: 950,
                        image: "https://randomuser.me/api/portraits/women/52.jpg"
                    },
                    {
                        name: "Dr. Radhika Soni",
                        specialty: "Cardiologist",
                        experience: 9,
                        fee: 850,
                        image: "https://randomuser.me/api/portraits/women/61.jpg"
                    },
                    {
                        name: "Dr. Ankur Yadav",
                        specialty: "Urologist",
                        experience: 7,
                        fee: 500,
                        image: "https://randomuser.me/api/portraits/men/15.jpg"
                    },
                    {
                        name: "Dr. Shubhi Garg",
                        specialty: "Psychologist",
                        experience: 12,
                        fee: 800,
                        image: "https://randomuser.me/api/portraits/women/13.jpg"
                    },
                    {
                        name: "Dr. Sandeep Joshi",
                        specialty: "Ophthalmologist",
                        experience: 10,
                        fee: 650,
                        image: "https://randomuser.me/api/portraits/men/19.jpg"
                    },
                    {
                        name: "Dr. Neha Patel",
                        specialty: "General Surgeon",
                        experience: 16,
                        fee: 1200,
                        image: "https://randomuser.me/api/portraits/women/11.jpg"
                    },
                    {
                        name: "Dr. Rahul Mishra",
                        specialty: "Podiatrist",
                        experience: 5,
                        fee: 500,
                        image: "https://randomuser.me/api/portraits/men/23.jpg"
                    },
                    {
                        name: "Dr. Sunita Mehta",
                        specialty: "Obstetrician",
                        experience: 18,
                        fee: 950,
                        image: "https://randomuser.me/api/portraits/women/25.jpg"
                    },
                    {
                        name: "Dr. Harinder Singh",
                        specialty: "Radiation Oncologist",
                        experience: 25,
                        fee: 1400,
                        image: "https://randomuser.me/api/portraits/men/29.jpg"
                    },
                    {
                        name: "Dr. Leena Gupta",
                        specialty: "Dermatologist",
                        experience: 11,
                        fee: 700,
                        image: "https://randomuser.me/api/portraits/women/41.jpg"
                    },
                    {
                        name: "Dr. Parag Sood",
                        specialty: "Plastic Surgeon",
                        experience: 19,
                        fee: 1300,
                        image: "https://randomuser.me/api/portraits/men/59.jpg"
                    },
                    {
                        name: "Dr. Pankaj Bansal",
                        specialty: "Otorhinolaryngologist",
                        experience: 13,
                        fee: 850,
                        image: "https://randomuser.me/api/portraits/men/17.jpg"
                    },
                    {
                        name: "Dr. Sania Iqbal",
                        specialty: "Cardiologist",
                        experience: 8,
                        fee: 900,
                        image: "https://randomuser.me/api/portraits/women/36.jpg"
                    },
                    {
                        name: "Dr. Manish Kumar",
                        specialty: "Gastroenterologist",
                        experience: 15,
                        fee: 1000,
                        image: "https://randomuser.me/api/portraits/men/39.jpg"
                    },
                    {
                        name: "Dr. Kiran Verma",
                        specialty: "Hematologist",
                        experience: 20,
                        fee: 1100,
                        image: "https://randomuser.me/api/portraits/women/46.jpg"
                    },
                    {
                        name: "Dr. Priya Patil",
                        specialty: "Pediatrician",
                        experience: 10,
                        fee: 700,
                        image: "https://randomuser.me/api/portraits/women/50.jpg"
                    },
                    {
                        name: "Dr. Nishant Singh",
                        specialty: "Geriatric Specialist",
                        experience: 12,
                        fee: 800,
                        image: "https://randomuser.me/api/portraits/men/57.jpg"
                    }
                ]);
            }, 1000);
        });
    };

    const renderDoctors = (doctors) => {
        doctorList.innerHTML = "";
        doctors.forEach((doc) => {
            const card = document.createElement("div");
            card.className = "doctor-card";
            card.innerHTML = `
                <img class="doctor-image" src="${doc.image}" alt="${doc.name}" />
                <div class="doctor-name">${doc.name}</div>
                <div class="doctor-specialty">${doc.specialty}</div>
                <div class="doctor-experience">Experience: ${doc.experience} years</div>
                <div class="doctor-fee">Fees: ₹${doc.fee}</div>
            `;
            doctorList.appendChild(card);
        });
    };

    fetchDoctors().then(renderDoctors);
});
