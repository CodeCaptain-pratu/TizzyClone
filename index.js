// dark and light theme 
let wrapper=document.querySelector("#wrapper");
let body=document.body;
let sun=document.querySelector(".sun");
sun.innerHTML=`<i class="fa-solid fa-moon"></i>`
let dark=true;
sun.addEventListener("click",()=>{
    sun.style.borderRadius="50%";
    if(dark){
       body.classList.add("dark");
       body.classList.remove("light");
       sun.innerHTML=`<i class="fa-solid fa-sun"></i>`;
       dark=false;
    }
    else{
        body.classList.add("light");
        body.classList.remove("dark");
        sun.innerHTML=`<i class="fa-solid fa-moon"></i>`;
        dark=true;
    }
})

let hamburger = document.querySelector(".hamburger");
let mobileMenu = document.querySelector(".mobile-menu");
let close = document.querySelector(".close"); 

hamburger.addEventListener("click", () => {
    mobileMenu.classList.add("show");
    gsap.from(".mobile-links", {
        y:-50,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
        stagger: 0.2
      });
      
    mobileMenu.classList.remove("hide");
});
close.addEventListener("click",()=>{
    mobileMenu.classList.remove("show");
    mobileMenu.classList.add("hide");
}) 
// features
document.addEventListener('DOMContentLoaded', () => {
  const cardData = [
      {
          title: 'Email Send/Receive Speed',
          img:'/Img/message.gif',
          data:"Fastest Outlook/Any Email Application Sync Speed",
      },
      {
          title: 'Backup and Restore ',
          img:"/Img/diagram.gif",
          data:"Automated 30 days scheduled backup on AWS S3 Bucket",
      },
      {
          title: 'Data Localisation/Cloud Infra ',
          img:"/Img/way.gif",
          data:"Hosted on Amazon AWS in INDIA",
      },
      {
          title: 'Guaranteed Inbox Delivery',
          img:"/Img/inbox.gif",
          data:"Almost all our emails land in Inbox because of our clean IP reputation globally and Errorless DNS ",
      },
      {
          title: 'AWS Security Standards ',
          img:"/Img/shield.gif",
          data:"AWS Foundational Security Best Practices, CIS AWS Foundations Benchmark & PCI DSS ",
      },
      {
          title: 'NO Errors or Warnings on MXToolBox Email Health ',
          img:"/Img/warning.gif",
          data:"All the domains using Tizzy Mail and Tizzy DNS services has no errors or warnings",
      },
      {
          title: 'IP Reputation ',
          img:"/Img/worldwide.gif",
          data:"0% IP blacklisting issue ",
      },
      {
          title: 'Availability ',
          img:"/Img/clock.gif",
          data:"99.99% Uptime ",
      },
      {
          title:"Attachment ",
          img:"/Img/paperclip.gif",
          data:"Upto 50 MB File Size",
      },
      {
          title:"Mailbox Storage ",
          img:"/Img/mailing.gif",
          data:"Plans from 10 GB to 1 TB of Cloud Storage ",
      },
      {
          title:"Good Email Deliverability Rate",
          img:"/Img/favorite.gif",
          data:"Almost 99.9% of Emails are delivered successfully",
      }
  ];

  const cardsContainer = document.getElementById('featureinfo');
  const toggleViewBtn = document.getElementById('toggleViewBtn');

  let showingAll = false;

  function renderCards() {
      cardsContainer.innerHTML = '';

      const cardsToShow = showingAll ? cardData : cardData.slice(0, 3);

      cardsToShow.forEach((card, index) => {
          const cardDiv = document.createElement('div');
          cardDiv.classList.add('featureCard');
          cardDiv.style.animationDelay = `${index * 100}ms`;
          cardDiv.innerHTML = `
              <div class="top">${card.title}</div>
              <div class="bottomOfCard">
                  <div class="img"><img src="${card.img}" alt="feature"></div>
                  <div class="intro"><h3>${card.data}</h3></div>
              </div>
          `;

          cardsContainer.appendChild(cardDiv);
      });

      toggleViewBtn.textContent = showingAll ? 'View Less' : 'View More';
  }

  toggleViewBtn.addEventListener('click', () => {
      showingAll = !showingAll;
      renderCards();
  });

  renderCards();
});
//plans
const arrows = document.querySelectorAll('.arrow');

arrows.forEach(arrow => {
  arrow.addEventListener('click', () => {
    const details = arrow.nextElementSibling;
    details.classList.toggle('show');
    arrow.classList.toggle('rotate-90');
  });
});
//Testimonial
document.addEventListener('DOMContentLoaded', () => {
    const cardData = [
        {
            title: 'Incoming spam emails are reduced to 60-70%, almost ZERO complaints from our customers, quick response to our emails. All IT companies should offer only Tizzy Mail service to their clients.',
            image: '/Img/avatar-user.png',
            position: 'Owner of 22-year-old IT company ',
            location:'MUMBAI, INDIA'
        },
        {
            title: 'Our existing vendor was not able to solve daily issues related to emails. so we were about to migrate all 200 email users to either Google or Microsoft. After trying Tizzy Mail our team was very happy as almost all the issues were solved immediately after activation.',
            image: '/Img/avatar-user.png',
            position: 'IT Manager of leading HR Company ',
            location:'MUMBAI, INDIA'
        },
        {
            title: 'IP blacklisting issue, UCE Protect level 2 and level 3 listing issues, spamming issues, other DNS related issues all were solved after moving spamming issues, other DNS related issues all were solved after moving with Tizzy Mail all our Email Data is now stored only in India. ',
            image: '/Img/avatar-user.png',
            position: 'IT Manager of multinational manufacturing company ',
            location:'MUMBAI, INDIA '
        },
        // Add more card data as needed
    ];
  
    const cardsContainer = document.getElementById('cardinfo');
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');
    let currentIndex = 0;
  
    function renderCards() {
        cardsContainer.innerHTML = '';
        cardData.forEach((card, index) => {
            const cardDiv = document.createElement('div');
            cardDiv.classList.add('firstCard');
            if (index === currentIndex) {
                cardDiv.style.display = 'block';
            } else {
                cardDiv.style.display = 'none';
            }
            cardDiv.innerHTML = `
                <div class="top">${card.title}</div>
                <div class="bottomOfCard">
                    <div class="img"><img src="${card.image}" alt="user"></div>
                    <div class="intro"><h3>${card.position}</h3>
                    <p>${card.location}</p></div>
                </div>
            `;
            cardsContainer.appendChild(cardDiv);
        });
    }
  
    function updateSliderPosition() {
        renderCards();
    }
  
    nextButton.addEventListener('click', () => {
        if (currentIndex < cardData.length - 1) {
            currentIndex++;
        } else {
            currentIndex = 0; // Loop back to the first card
        }
        updateSliderPosition();
    });
  
    prevButton.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = cardData.length - 1; // Loop back to the last card
        }
        updateSliderPosition();
    });
  
    // Initial render
    renderCards();
  });

  

// FAQ
let arrFaq = [
  {
    question: "1. What is Cloud Business Email Hosting Service? ",
    answer: "Cloud Email Hosting is a service setup on Cloud Computing Environment. Cloud enables high availability or uptime of service along with safety and security of stored data. Backup and disaster recovery is very fast on Cloud servers."
  },
  {
    question: "2. What is Tizzy®Mail? ",
    answer: "Tizzy Mail is a Cloud Business Email Hosting Solution provided by Tizzy®Cloud. It is hosted on the most advanced Cloud Computing Infrastructure of the world."
  },
  {
    question: "3. We have not heard about Tizzy Mail so How old is Tizzy Mail?",
    answer: "Tizzy Mail has a consistent growth record of more than 7 years. We have thousands of email users comprises of small and big corporate companies. "
  },
  {
    question: "4. How do we migrate to Tizzy®Mail? ",
    answer: "Migrating to Tizzy Mail is very easy. Our technical support specialist can help you in migrating your email services or email data to Tizzy Mail. "
  },
  {
    question: "5. How to renew the services next year? ",
    answer: "You will get a daily email notification on your registered email address 7 days prior to the expiry date. You can reply to the email and make payment as per the invoice to process the renewal."
  },
];

let parentFaq = document.querySelector("#parentfaq");

arrFaq.forEach((elem, index) => {
  let div = document.createElement("div");
  div.className = "faq-box";

  div.innerHTML = `
    <button class="question-btn" id="btn-${index}">
      <h2 class="question">${elem.question}</h2>
    </button>
    <div class="answer" id="ans-${index}">
      <div class="answer-content">
        <span class="border-line"></span>
        <p class="answer-text">${elem.answer}</p>
      </div>
    </div>
    <hr class="divider" />
  `;

  parentfaq.appendChild(div);
});

arrFaq.forEach((_, index) => {
  const btn = document.getElementById(`btn-${index}`);
  const ans = document.getElementById(`ans-${index}`);

  btn.addEventListener("click", () => {
    ans.style.display = ans.style.display === "block" ? "none" : "block";
    gsap.from(ans,{
        opacity:0,
        duration:0.5,
        ease: "power2.inOut",
    })
  });
});
