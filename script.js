function openDialog() {
    var dialog = document.getElementById("video-dialog");
    dialog.style.display = "flex";
    var video = document.getElementById("video");
    video.play();
}

function closeDialog() {
    var dialog = document.getElementById("video-dialog");
    dialog.style.display = "none";
    var video = document.getElementById("video");
    video.pause();
    video.currentTime = 0;
}

// map js

document.addEventListener('DOMContentLoaded', () => {
    const states = {
       "IN-AP": {
            name: "Andhra Pradesh",
            info: "Andhra Pradesh is a state in southeastern India.",
            police: {
                email: "police.ap@example.com",
                phone: "1234-567-890",
                headquarters: "Visakhapatnam"
            }
        },
        "IN-AR": {
            name: "Arunachal Pradesh",
            info: "Arunachal Pradesh is a state in northeast India.",
            police: {
                email: "police.ar@example.com",
                phone: "0987-654-321",
                headquarters: "Itanagar"
            }
        },
        "IN-AS": {
            name: "Assam",
            info: "Assam is known for its tea plantations and rich culture.",
            police: {
                email: "police.as@example.com",
                phone: "1122-3344-556",
                headquarters: "Guwahati"
            }
        },
        "IN-BR": {
            name: "Bihar",
            info: "Bihar is a state in eastern India with a rich history.",
            police: {
                email: "police.br@example.com",
                phone: "7788-9900-112",
                headquarters: "Patna"
            }
        },
        "IN-CT": {
            name: "Chhattisgarh",
            info: "Chhattisgarh is a heavily forested state in central India.",
            police: {
                email: "police.ct@example.com",
                phone: "2233-4455-667",
                headquarters: "Raipur"
            }
        },
        "IN-GA": {
            name: "Goa",
            info: "Goa is known for its beautiful beaches and Portuguese heritage.",
            police: {
                email: "police.ga@example.com",
                phone: "8899-6677-223",
                headquarters: "Panaji"
            }
        },
        "IN-GJ": {
            name: "Gujarat",
            info: "Gujarat is a western Indian state known for its diverse culture.",
            police: {
                email: "police.gj@example.com",
                phone: "9900-1122-334",
                headquarters: "Gandhinagar"
            }
        },
        "IN-HR": {
            name: "Haryana",
            info: "Haryana is a state in northern India, known for its agricultural economy.",
            police: {
                email: "police.hr@example.com",
                phone: "5566-7788-990",
                headquarters: "Chandigarh"
            }
        },
        "IN-HP": {
            name: "Himachal Pradesh",
            info: "Himachal Pradesh is known for its Himalayan landscapes.",
            police: {
                email: "police.hp@example.com",
                phone: "3344-5566-778",
                headquarters: "Shimla"
            }
        },
        "IN-JH": {
            name: "Jharkhand",
            info: "Jharkhand is known for its waterfalls and national parks.",
            police: {
                email: "police.jh@example.com",
                phone: "6677-8899-223",
                headquarters: "Ranchi"
            }
        },
        "IN-KA": {
            name: "Karnataka",
            info: "Karnataka is known for its tech hub in Bangalore.",
            police: {
                email: "police.ka@example.com",
                phone: "1122-3344-556",
                headquarters: "Bangalore"
            }
        },
        "IN-KL": {
            name: "Kerala",
            info: "Kerala is known for its backwaters and tropical beauty.",
            police: {
                email: "police.kl@example.com",
                phone: "7788-9900-112",
                headquarters: "Thiruvananthapuram"
            }
        },
        "IN-MP": {
            name: "Madhya Pradesh",
            info: "Madhya Pradesh is known for its ancient temples and wildlife.",
            police: {
                email: "police.mp@example.com",
                phone: "8899-6677-223",
                headquarters: "Bhopal"
            }
        },
        "IN-MH": {
            name: "Maharashtra",
            info: "Maharashtra is known for Mumbai, the financial capital of India.",
            police: {
                email: "police.mh@example.com",
                phone: "2233-4455-667",
                headquarters: "Mumbai"
            }
        },
        "IN-MN": {
            name: "Manipur",
            info: "Manipur is known for its cultural diversity and natural beauty.",
            police: {
                email: "police.mn@example.com",
                phone: "3344-5566-778",
                headquarters: "Imphal"
            }
        },
        "IN-ML": {
            name: "Meghalaya",
            info: "Meghalaya is known for its high rainfall and scenic beauty.",
            police: {
                email: "police.ml@example.com",
                phone: "6677-8899-223",
                headquarters: "Shillong"
            }
        },
        "IN-MZ": {
            name: "Mizoram",
            info: "Mizoram is a mountainous state in northeastern India.",
            police: {
                email: "police.mz@example.com",
                phone: "7788-9900-112",
                headquarters: "Aizawl"
            }
        },
        "IN-NL": {
            name: "Nagaland",
            info: "Nagaland is known for its indigenous tribes and festivals.",
            police: {
                email: "police.nl@example.com",
                phone: "8899-6677-223",
                headquarters: "Kohima"
            }
        },
        "IN-OR": {
            name: "Odisha",
            info: "Odisha is known for its ancient temples and wildlife sanctuaries.",
            police: {
                email: "police.or@example.com",
                phone: "2233-4455-667",
                headquarters: "Bhubaneswar"
            }
        },
        "IN-PB": {
            name: "Punjab",
            info: "Punjab is known for its agricultural richness and vibrant culture.",
            police: {
                email: "police.pb@example.com",
                phone: "3344-5566-778",
                headquarters: "Chandigarh"
            }
        },
        "IN-RJ": {
            name: "Rajasthan",
            info: "Rajasthan is known for its desert landscapes and royal palaces.",
            police: {
                email: "police.rj@example.com",
                phone: "6677-8899-223",
                headquarters: "Jaipur"
            }
        },
        "IN-SK": {
            name: "Sikkim",
            info: "Sikkim is a small state in the Himalayan mountains, known for its biodiversity.",
            police: {
                email: "police.sk@example.com",
                phone: "7788-9900-112",
                headquarters: "Gangtok"
            }
        },
        "IN-TN": {
            name: "Tamil Nadu",
            info: "Tamil Nadu is known for its Dravidian culture and temples.",
            police: {
                email: "police.tn@example.com",
                phone: "8899-6677-223",
                headquarters: "Chennai"
            }
        },
        "IN-TG": {
            name: "Telangana",
            info: "Telangana is a state in southern India.",
            police: {
                email: "police.tg@example.com",
                phone: "0987-654-321",
                headquarters: "Hyderabad"
            }
        },
        "IN-TR": {
            name: "Tripura",
            info: "Tripura is a small state with a rich tribal culture.",
            police: {
                email: "police.tr@example.com",
                phone: "2233-4455-667",
                headquarters: "Agartala"
            }
        },
        "IN-UP": {
            name: "Uttar Pradesh",
            info: "Uttar Pradesh is India's most populous state, home to the Taj Mahal.",
            police: {
                email: "police.up@example.com",
                phone: "3344-5566-778",
                headquarters: "Lucknow"
            }
        },
        "IN-UK": {
            name: "Uttarakhand",
            info: "Uttarakhand is known for its pilgrimage sites and scenic beauty.",
            police: {
                email: "police.uk@example.com",
                phone: "6677-8899-223",
                headquarters: "Dehradun"
            }
        },
        "IN-WB": {
            name: "West Bengal",
            info: "West Bengal is known for its cultural heritage and the city of Kolkata.",
            police: {
                email: "police.wb@example.com",
                phone: "7788-9900-112",
                headquarters: "Kolkata"
            }
        },
        "IN-AN": {
            name: "Andaman & Nicobar Islands",
            info: "Andaman & Nicobar Islands are a group of islands in the Indian Ocean.",
            police: {
                email: "police.an@example.com",
                phone: "4567-890-123",
                headquarters: "Port Blair"
            }
        },
        "IN-CH": {
            name: "Chandigarh",
            info: "Chandigarh is a union territory and the capital of Punjab and Haryana.",
            police: {
                email: "police.ch@example.com",
                phone: "2233-4455-667",
                headquarters: "Chandigarh"
            }
        },
        "IN-DL": {
            name: "Delhi",
            info: "Delhi is the capital of India and a union territory.",
            police: {
                email: "police.dl@example.com",
                phone: "1122-3344-556",
                headquarters: "New Delhi"
            }
        },
        "IN-JK": {
            name: "Jammu & Kashmir",
            info: "Jammu & Kashmir is a union territory known for its scenic beauty.",
            police: {
                email: "police.jk@example.com",
                phone: "6677-8899-223",
                headquarters: "Srinagar"
            }
        },
        "IN-LD": {
            name: "Lakshadweep",
            info: "Lakshadweep is a union territory comprising small islands off India's west coast.",
            police: {
                email: "police.ld@example.com",
                phone: "7788-9900-112",
                headquarters: "Kavaratti"
            }
        },
        "IN-LA": {
            name: "Ladakh",
            info: "Ladakh is a union territory known for its mountainous landscapes.",
            police: {
                email: "police.la@example.com",
                phone: "2233-4455-667",
                headquarters: "Leh"
            }
        },
        "IN-PY": {
            name: "Puducherry",
            info: "Puducherry is a union territory known for its French colonial history.",
            police: {
                email: "police.py@example.com",
                phone: "3344-5566-778",
                headquarters: "Puducherry"
            }
        },
       
    };

    const stateModal = document.getElementById('state-modal');
    const stateName = document.getElementById('state-name');
    const stateInfo = document.getElementById('state-info');
    const policeEmail = document.getElementById('police-email');
    const policePhone = document.getElementById('police-phone');
    const policeHeadquarters = document.getElementById('police-headquarters');

    // Function to show the modal when hovering over a state
    const handleStateHover = (event) => {
        const stateId = event.target.id;
        if (states[stateId]) {
            stateName.innerText = states[stateId].name;
            stateInfo.innerText = states[stateId].info;
            policeEmail.innerText = `Email: ${states[stateId].police.email}`;
            policePhone.innerText = `Phone: ${states[stateId].police.phone}`;
            policeHeadquarters.innerText = `Headquarters: ${states[stateId].police.headquarters}`;

            // Position the modal relative to the mouse pointer
            stateModal.style.display = "block";
            stateModal.style.left = `${event.pageX + 15}px`;  // 15px right of the cursor
            stateModal.style.top = `${event.pageY + 15}px`;   // 15px below the cursor

            console.log('Hover detected, displaying modal'); // Check if event fires
        }
    };

    // Function to hide the modal when the mouse leaves the state
    const handleStateMouseOut = () => {
        stateModal.style.display = "none";
        console.log('Mouse out, hiding modal'); // Check if the modal hides correctly
    };

    // Add hover event listeners to all state paths
    const statePaths = document.querySelectorAll('path');
    if (statePaths.length > 0) {
        statePaths.forEach(state => {
            state.addEventListener('mouseover', handleStateHover);
            state.addEventListener('mouseout', handleStateMouseOut);
        });
    } else {
        console.error('No <path> elements found.');
    }
});


// completed map code

function makeEmergencyCall() {
    const PoliceemergencyNumber = "tel:+100";
    window.location.href = PoliceemergencyNumber;
}

function makeEmergencyCall() {
    const callAbuseHelpline = "tel:+1098";
    window.location.href = callAbuseHelpline;
}



function toggleDropdown() {
    const dropdown = document.getElementById("helplineDropdown");
    // Toggle display: show if hidden, hide if shown
    dropdown.style.display = dropdown.style.display === "none" || dropdown.style.display === "" ? "block" : "none";
}

// Function to call Women's Helpline
function callWomenHelpline() {
    window.location.href = "tel:+1091"; // Women's helpline number
}

// Function to call Police
function callPolice() {
    window.location.href = "tel:+100"; // Police emergency number
}

// Function to call Domestic Violence Helpline
function callDomesticViolenceHelpline() {
    window.location.href = "tel:+181"; // Domestic violence helpline number
}

// Function to call National Commission for Women (NCW)
function callNCW() {
    window.location.href = "tel:+7827170170"; // NCW helpline number
}

// Function to call Child/Women Abuse Helpline
function callAbuseHelpline() {
    window.location.href = "tel:+1098"; // Child/women abuse helpline number
}

// Function to call Ambulance
function callAmbulance() {
    window.location.href = "tel:+102"; // Ambulance helpline number
}