import logo from './logo.svg';
import './App.css';

function App() {
  const cardArr=[
    {
    "id": "1",
    "title": "Introduction To A Machine Learning",
    "thumbnail": "https://edyoda.s3.amazonaws.com/media/blog-images/learn_machine_learning_courses_online.png",
    "description":"We have had an insight into Artificial Intelligence. Well, one of its subfields is machine learning and this introduction will help you get a fair idea of what this machine learning.",
    "author":"Edyoda",
    "date":"23 Aug 2019"
},
{
    "id": "2",
    "title": "Getting started with Artificial Intelligence",
    "thumbnail": "https://edyoda.s3.amazonaws.com/media/blog-images/learn-artificial-intelligence.jpeg",
    "description":"We’re rapidly moving towards a day and age where almost everything can be controlled by machines and one of the most revolutionary moves has been th..",
    "author":"Edyoda",
    "date":" 08 july 2019"
},
{
    "id": "3",
    "title": "Big Data: Importance of Big Data Management",
    "thumbnail": "https://edyoda.s3.amazonaws.com/media/blog-images/importance-of-big-data-management-and-its-challenges.jpg",
    "description":"Big data is the phrase that is used to define large structured and unstructured volumes of data that has the potential to be mined for information and used in machine.",
    "author":"Edyoda",
    "date":" 23 july 2019"
},
{
    "id": "4",
    "title": "Understanding DevOps",
    "thumbnail": "https://edyoda.s3.amazonaws.com/media/blog-images/understanding-devops.jpg",
    "description":"DevOps is a term derived after combining development and operation for a common purpose- driving the development of operational processes. ",
    "author":"Edyoda",
    "date":"23 Aug 2019"
},
{
    "id": "5",
    "title": "LAMP Stack Vs MEAN Stack",
    "thumbnail": "https://edyoda.s3.amazonaws.com/media/blog-images/6.png",
    "description":"In today’s dynamic world, developing a rapid application with a smooth user interface that can adapt to specific features is the main business requirement.",
    "author":"Edyoda",
    "date":"28 Sep 2019"
},
{
    "id": "6",
    "title": "Challenges of Machine Learning in big Data",
    "thumbnail": "https://edyoda.s3.amazonaws.com/media/blog-images/3.png",
    "description":"Machine Learning is a subset of artificial intelligence which is an important part of computer science. The revolution of Big Data promises to transform.",
    "author":"Edyoda",
    "date":"21 Aug 2019"
},
{
    "id": "7",
    "title": "Breaking the Myths around Cybersecurity",
    "thumbnail": "https://edyoda.s3.amazonaws.com/media/blog-images/5.png",
    "description":"Cybersecurity plays an integral role in the process of good business models. But even cybersecurity programs built with good intentions can fall short in.",
    "author":"Edyoda",
    "date":"26 Aug 2019"
},
{
    "id": "8",
    "title": "Impact of Cloud Computing",
    "thumbnail": "https://edyoda.s3.amazonaws.com/media/blog-images/4.png",
    "description":"Cloud computing has been rapidly gaining pace in the world of information technology. It has been observed that over 90% of global enterprises are using cloud.",
    "author":"Edyoda",
    "date":"25 Nov 2019"
},
{
    "id": "9",
    "title": "Importance of Data Backup and Recovery",
    "thumbnail": "https://edyoda.s3.amazonaws.com/media/blog-images/7.png",
    "description":"A business must always introspect the areas where they lack in order to bring about a positive change in the work environment. One of the main..",
    "author":"Edyoda",
    "date":" Aug 2019"
},
{
    "id": "10",
    "title": "What is Web Scraping?",
    "thumbnail": "https://edyoda.s3.amazonaws.com/media/blog-images/automation-testing-an-overview-2.png",
    "description":"Simply put, web scraping is one of the tools developers use to gather and source information from the internet. Some websites and platforms offer application..",
    "author":"Zac Clancy",
    "date":" 25 Sep 2019"
},
{
    "id": "11",
    "title": "What is Income Share Agreement?",
    "thumbnail": "https://edyoda.s3.amazonaws.com/media/blog-images/what_is_isa_blog_1.png",
    "description":"The term Income Share Agreement has been around for a long time since 1955 to be precise. Surprised, eh? It was first introduced by Milton Friedman,...",
    "author":"Edyoda",
    "date":" Aug 2019"
},
{
    "id": "12",
    "title": "Practical Machine Learning with python",
    "thumbnail": "https://edyoda.s3.amazonaws.com/media/blog-images/practical_machine_learning_1.png",
    "description":"Machine learning is a field of artificial intelligence that uses statistical techniques to give computer systems the ability to “learn” (e.g., progressively...",
    "author":"Deniel Pyrathon",
    "date":" 16 Oct 2019"
}

];
const cards = cardArr.map(item=>{
  return   (        <div className="blog-card">
  <img className="blog-img" src={item.thumbnail} alt="blog-img"/>
  <div className="blog-content">
      <h3 className="blog-head">{item.title}</h3>
      <div className="author-details"><span className="author-name">{item.author}</span ><span className="blog-date">| {item.date}</span>
      </div>
      <p className="description">{item.description}</p>
  </div>
</div>
)

});

  return (
    <div className="App">
      <nav>
        <div class="left-menu">
            <div id="logo_wrapper"><span class="logo">EDYODA</span> <br/>
                <span class="story">Stories</span>
            </div>
             <span class="explore">Explore Categories</span>
             <i class="fas fa-angle-down arrow"></i>
        </div>
        <div class="right-menu">
            <span>EdYoda is free learning and knowledge <br/> 
             sharing platform for techies</span>
             <div >   <button class="btnmain">Go to Main Website</button>
                </div>
        </div>
    </nav>

    <div id="main-container">
    <div class="categories-container">
            <h2 class="category-head">Latest Posts
            </h2>
            <p class="filter">Filter by Category
            </p>
            <span class=" active-category">All</span>
            <span class="small">Artificial Intelligence</span>
            <span class="small">Cloud Computing</span>
            <span class="small">DevOps
            </span>
            <span class="small">programming Language</span>
            <span class="small">Mobile Application Development</span>
            <span class="small">Technology and Tools
            </span>
            <span class="small">Get a Job in Tech Company
            </span>
            <span class="small ">Others</span>
        </div>

        {cards}
      </div>
      <footer>
        <div>
            <p class="footer-heading">Edyoda</p>
            <a href="/" class="footer-link">About Us</a>
            <a href="/" class="footer-link"></a>
            <a href="/" class="footer-link">Men Accessories</a>
            <a href="/" class="footer-link">Women Accessories</a>
        </div>
        <div>
            <p class="footer-heading">Helpful Links</p>
            <a href="/" class="footer-link">Home</a>
            <a href="/" class="footer-link">About</a>
            <a href="/" class="footer-link">Contact</a>
        </div>
        <div>
            <p class="footer-heading">Partners</p>
            <a href="/" class="footer-link">Zara</a>
            <a href="/" class="footer-link">Pantaloons</a>
            <a href="/" class="footer-link">Levis</a>
            <a href="/" class="footer-link">UCB</a>
            <a href="/" class="footer-link">+Many More</a>
        </div>
        <div>
            <p class="footer-heading">Address</p>
            <a href="/" class="footer-link">Building 101</a>
            <a href="/" class="footer-link">Central Avenue</a>
            <a href="/" class="footer-link">LA - 902722</a>
            <a href="/" class="footer-link">United States</a>
        </div>

    </footer>


    </div>
  );
}

export default App;

