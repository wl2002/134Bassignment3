# CSE 134B - Homework #3

## Group Members
    Arby Abraamyan (A11027009)
    Moez Hudda (A11637402)
    Milad Hanna (A11187441)
    Noor Bakkal (A11275151)
    William Lewis (A11484755)
    
## NOTES FOR GRADING

Please visit our tag.html pages which are provided for the bootstrap  and non-bootstrap versions of the website. We did not link to this page directly and therefore you must open that page separately.
    

## Design Features and Changes

Our team decided to completely redesign our website, taking inspiration from bootstrap themes. In our design, we decided to provide our users with an easy to use, yet professional looking reference. In order to accommodate different users, we provide three different ways to find tags.
    
        1. Using the A-Z List (Pagination links on the bottom of index.html)
        2. Using the category links on the left side navigation
        3. Using the search bar on the top-right corner

In addition, we also list our tags on the homepage for users who want to browse all HTML tags. By providing multiple ways to view tags, we improve usability by accommodating to different usage patterns.
    
Since users typically spend most of their time on the Internet browsing other website, we must conform to some simple design ideas in order to improve usability and avoid confusion. Thus, we have added our main navigation on the top of the page (near the back button on most browsers). We have also added a supplementary left side navigation for tag categories. Finally, we have included a search bar on the top-right corner which is the norm on most large websites.
    
Finally, we decided to use a simple, yet professional color scheme that is easy on the eyes. We realize that the majority of our users are seeking information and therefore we want to provide the information within an interface which is free of unnecessary distractions.
    
## Problems & Workarounds

Our group encountered several challenges while implementing the bootstrap version. Most of the issues were resolved by reading documentation and experimenting with the CSS classes and constructs found on the bootstrap website. Some major additions were the left side navigation, redesigned navigation bar to include search, the PoweredByCoffee logo, and the inclusion of pagination with the A-Z list.
    
The real challenges presented while working on the raw version of the website. One of the challenges we faced was in designing the columns for the content area of our website. For example, we had to use -webkit-column and -moz-column type CSS attributes in order to make our columns render properly across browsers. We even faced a strange bug with the first column of our three inner columns and had to include a special rule which added a negative top-margin to the first column. This workaround helped align the columns and make everything look proportional.
    
We also had to figure out how to properly partition the page with several block layers to create the inner content box. We decided to follow in the footsteps of bootstrap and use div tags to achieve some simple block features such as the three columns inside the larger box with inner scrolling functionality.
    
Another challenging aspect of the raw version was figuring our the proper CSS for the navigation. We had to use CSS selectors such as ">" to target specific tags and achieve a clean design without in-line CSS. Outside of the container structures and columns, the navigation bar required the most work. We tweaked the CSS code hundreds of times to try to replicate the look we achieved using bootstrap.
    
Furthermore, since we could not use JavaScript in this assignment. We had to create lots of html pages and were not able to properly implement the pagination feature which we plan to fully implement by the next assignment with the help of JavaScript.
    
## Final Thoughts

Overall, our team learned the many challenges faced by client side web programmers. Through our project, we learned to use CSS and HTML to develop a beautiful and highly usable user interface. Our goals for the next assignment are to introduce JavaScript and add more rich features such as search and pagination. 
