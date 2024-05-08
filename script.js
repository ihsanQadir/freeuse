
const x = document.getElementsByTagName('a')[4]
 
x.addEventListener('click', () => {
    x.classList.toggle('btn')
})
const y = document.getElementsByTagName('a')[5]
 
y.addEventListener('click', () => {
    y.classList.toggle('btn')
})
const z = document.getElementsByTagName('a')[6]
 
z.addEventListener('click', () => {
    z.classList.toggle('btn')
})
const u = document.getElementsByTagName('a')[7]
 
u.addEventListener('click', () => {
    u.classList.toggle('btn')
})
const v = document.getElementsByTagName('a')[8]
 
v.addEventListener('click', () => {
    v.classList.toggle('btn')
})
//
$(".click-btn-down").click(function(){
  var link = $(".link").val();
var fromate = $(".formte").children("option:selected").val();
src =" "+link+"="+fromate+" ";
downloadVideo(link, fromate);
});
function downloadVideo(link, fromate) {
  $('.download-video').html('<iframe style="width:180px;height:35px;overflow:hidden;" scrolling="no" src="https://loader.to/api/button/?url='+link+'&f='+fromate+'"></iframe>');
}

//   -----seo----
const els = {
 output: document.querySelector("#output"),
 formMeta: document.querySelector("form#meta"),
}

const meta = {
  title: ["title", "og:title", "twitter:title"],
  desc: ["title", "og:title", "twitter:title"],
  img: ["og:image", "twitter:image"],
  theme: ["theme-color"],
}

els.formMeta.addEventListener("submit", e => {
  e.preventDefault();
  const input = new FormData(e.target);
  els.output.innerText = Object.entries(meta).flatMap(([key, names]) => names.map(
    name => `<meta name="${name}" content="${input.get(key)}" />`)
  ).join("\n");
});
// ---about us --

// <!-- Begin
    function create(form) {        
        if (form.input4.value != "") {
          form.story.value +="<h1>We are [company, website name] \"" +
          form.input4.value + "\"</h1>Welcome to [store name], your number one source for all things [product, ie: shoes, bags, dog treats]. We're dedicated to giving you the very best of [product], with a focus on [three characteristics, ie: dependability, customer service and uniqueness.], please feel free to contact us by email at\n";
        }
        if (form.input10.value != "") {
          form.story.value +="\" " +
          form.input10.value + "\" \n";
        }
        if (form.input4.value != "") {
          form.story.value +="<h1>We are the firm providing [services, etc.]\" " +
          form.input4.value + "\" \n";
        }
        if (form.input2.value != "") {
          form.story.value +="</h1>[company name] was founded in [year] -\" " +
          form.input2.value + "\" \n";
        }
        if (form.input2.value != "") {
          form.story.value +="we provide our services [city, country, etc.].\" " +
          form.input2.value + "\" \n";
        }
        if (form.input4.value != "") {
          form.story.value +="     Founded in [year] by [founder's name], [store name] has come a long way from its beginnings in a [starting location, ie: home office, toolshed, Houston, TX.]. When [store founder] first started out, his/her passion for [passion of founder, ie: helping other parents be more eco-friendly, providing the best equipment for his fellow musicians] drove him to [action, ie: do intense research, quit her day job], and gave him the impetus to turn hard work and inspiration into to a booming online store. We now serve customers all over [place, ie: the US, the world, the Austin area], and are thrilled to be a part of the [adjective, ie: quirky, eco-friendly, fair trade] wing of the [industry type, ie: fashion, baked goods, watches] industry.  \"" +
          form.input4.value + "\"<br><br>We hope you enjoy our products as much as we enjoy offering them to you. If you have any questions or comments, please don't hesitate to contact us.<br><br><h1>Sincerely,</h1><br /><br />Your Name - Company Name\n";
        } 
         var copyText = document.getElementById("myInput");
       copyText.select();
       copyText.setSelectionRange(0, 99999)
       document.execCommand("copy");       
      }
    
    //  End -->
    // --disclaimer--
                 
    function create(form) {
     
        
        if (form.input4.value != "") {
          form.story.value +="<h1>Disclaimer for \"" +
          form.input4.value + "\"</h1>If you require any more information or have any questions about our site's disclaimer, please feel free to contact us by email at\n";
        }
        
        if (form.input10.value != "") {
          form.story.value +="\" " +
          form.input10.value + "\" \n";
        }



if (form.input4.value != "") {
          form.story.value +="<h1>Disclaimer for\" " +
          form.input4.value + "\" \n";
        }



if (form.input2.value != "") {
          form.story.value +="</h1>All the information on this website -\" " +
          form.input2.value + "\" \n";
        }



if (form.input2.value != "") {
          form.story.value +="is published in good faith and for general information purposes only.\" " +
          form.input2.value + "\" \n";
        }
if (form.input4.value != "") {
          form.story.value +="     does not make any warranties about the completeness, reliability and accuracy of this information. Any action you take upon the information you find on this website, is strictly at your own risk.  \"" +
          form.input4.value + "\"<br><br>will not be liable for any losses and/or damages in connection with the use of our website. From our website, you can visit other websites by following hyperlinks to such external sites. While we strive to provide only quality links to useful and ethical websites, we have no control over the content and nature of these sites. These links to other websites do not imply a recommendation for all the content found on these sites. Site owners and content may change without notice and may occur before we have the opportunity to remove a link that may have gone 'bad'.<br>Please be also aware that when you leave our website, other sites may have different privacy policies and terms which are beyond our control. Please be sure to check the Privacy Policies of these sites as well as their Terms of Service before engaging in any business or uploading any information.<br><br><h1>Consent</h1><br>By using our website, you hereby consent to our disclaimer and agree to its terms.<br><br><h1>Update</h1><br>Should we update, amend or make any changes to this document, those changes will be prominently posted here.\n";
        } 
     
         var copyText = document.getElementById("myInput");
copyText.select();
copyText.setSelectionRange(0, 99999)
document.execCommand("copy");
        
      }
    
    //  End -->
    // --privacy policy--
                      
    function creatking(form) {
     
        
        if (form.input4.value != "") {
          form.story.value +="<h1>Privacy Policy for \"" +
          form.input4.value + "\"</h1><br><br>at\n";
        }
        
        if (form.input4.value != "") {
          form.story.value +="\"   " +
          form.input4.value + "\"accessble  from  \n";
        }



        if (form.input2.value != "") {
          form.story.value +="   \"" +
          form.input2.value + "\" one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by\n";
        }
        
        if (form.input4.value != "") {
          form.story.value +="\""  +
          form.input4.value + "\"and how we use it.<br>If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us.\n";
       
        }


        if (form.input4.value != "") {
          form.story.value +="\This Privacy Policy applies only to our online activities and is valid for visitors to our website with regards to the information that they shared and/or collect on our webiste. This policy is not applicable to any information collected offline or via channels other than this website. Our Privacy Policy was created with the help of the CodeOreo's Privacy Policy Generator and we generate privacy policy for.\"" +
          form.input4.value + "\"<br><h1>Consent</h1><br>By using our website, you hereby consent to our Privacy Policy and agree to its terms.<br><br><h1>Information we collect</h1><br>The personal information that you are asked to provide, and the reasons why you are asked to provide it, will be made clear to you at the point we ask you to provide your personal information.<br><br>If you contact us directly, we may receive additional information about you such as your name, email address, phone number, the contents of the message and/or attachments you may send us, and any other information you may choose to provide.<br><br>When you register for an Account, we may ask for your contact information, including items such as name, company name, address, email address, and telephone number.<br><br><h1>How we use your information</h1><br><br>We use the information we collect in various ways, including to:<br><br><ul><li>Provide, operate, and maintain our webste</li><li>Improve, personalize, and expand our webste</li><li>Understand and analyze how you use our website<li><li>Develop new products, services, features, and functionality</li><li>Communicate with you, either directly or through one of our partners, including for customer service, to provide you with updates and other information relating to the website, and for marketing and promotional purposes</li><li>Send you emails<br> Find and prevent fraud</li></ul><br><h1>Log Files</h1>\n";
        
        }
        
        
if (form.input4.value != "") {
          form.story.value +="\" " +
          form.input4.value + "\"follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this and are a part of hosting services' analytics. The information collected by log files includes internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable. The purpose of the information is for analyzing trends, administering the site, tracking users' movement on the website, and gathering demographic information.<br><br><h1>Cookies and Web Beacons</h1><br><br>Like any other website,\n";
        }

if (form.input4.value != "") {
          form.story.value +="\"" +
          form.input4.value + "\"uses 'cookies'. These cookies are used to store information including visitors' preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize the users' experience by customizing our web page content based on visitors' browser type and/or other information.<br><br>For more general information on cookies. visit https://www.cookieconsent.com/what-are-cookies/ website<br><br><h1>Google DoubleClick DART Cookie</h1><br><br>Google is one of a third-party vendor on our site. It also uses cookies, known as DART cookies, to serve ads to our site visitors based upon their visit to www.website.com and other sites on the internet. However, visitors may choose to decline the use of DART cookies by visiting the Google ad and content network Privacy Policy at the following URL – https://policies.google.com/technologies/ads<br><br><h1>Our Advertising Partners</h1><br><br>Some of the advertisers on our site may use cookies and web beacons. Our advertising partners are listed below. Each of our advertising partners has its own Privacy Policy for its policies on user data. For easier access, we hyperlinked to their Privacy Policies below.<br>Google<br>https://policies.google.com/technologies/ads<br><br><h1>Advertising Partners Privacy Policies</h1><br><br>You may consult this list to find the Privacy Policy for each of the advertising partners of\n";
        }



        if (form.input4.value != "") {
          form.story.value +="\"" +
          form.input4.value + "\"Third-party ad servers or ad networks uses technologies like cookies, JavaScript, or Web Beacons that are used in their respective advertisements and links that appear on \n";
        }

if (form.input4.value != "") {
          form.story.value +="\"" +
          form.input4.value + "\", which are sent directly to users' browsers. They automatically receive your IP address when this occurs. These technologies are used to measure the effectiveness of their advertising campaigns and/or to personalize the advertising content that you see on websites that you visit.<br>Note that\n";
        }




        if (form.input4.value != "") {
          form.story.value +="\"" +
          form.input4.value + "\"has no access to or control over these cookies that are used by third-party advertisers.<br><br><h1>Third Party Privacy Policies</h1><br> \n";
        }



        if (form.input4.value != "") {
          form.story.value +="\"" +
          form.input4.value + "\"Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party ad servers for more detailed information. It may include their practices and instructions about how to opt out of certain options. <br><br>You can choose to disable cookies through your individual browser options. To know more detailed information about cookie management with specific web browsers, it can be found at the browsers' respective websites.<br><br><h1>CCPA Privacy Rights (Do Not Sell My Personal Information)</h1><br><br>Under the CCPA, among other rights, California consumers have the right to:<br>Request that a business that collects a consumer's personal data disfree tools the categories and specific pieces of personal data that a business has collected about consumers.<br>Request that a business deletes any personal data about the consumer that a business has collected.<br>Request that a business that sells a consumer's personal data, not sell the consumer's personal data.<br>If you make a request, we have one month to respond to you. If you would like to exercise any of these rights, please contact us.<br><br><h1>GDPR Data Protection Rights</h1><br>We would like to make sure you are fully aware of all of your data protection rights. Every user is entitled to the following:<br>The right to access – You have the right to request copies of your personal data. We may charge you a small fee for this service.<br>The right to rectification – You have the right to request that we correct any information you believe is inaccurate. You also have the right to request that we complete the information you believe is incomplete.<br>The right to erasure – You have the right to request that we erase your personal data, under certain conditions.<br>The right to restrict processing – You have the right to request that we restrict the processing of your personal data, under certain conditions.<br>The right to object to processing – You have the right to object to our processing of your personal data, under certain conditions.<br>The right to data portability – You have the right to request that we transfer the data that we have collected to another organization, or directly to you, under certain conditions.<br>If you make a request, we have one month to respond to you. If you would like to exercise any of these rights, please contact us.<br><br><h1>Children's Information</h1><br><br>Another part of our priority is adding protection for children while using the internet. We encourage parents and guardians to observe, participate in, and/or monitor and guide their online activity.<br><br>\n";
        }



if (form.input4.value != "") {
          form.story.value +="\"" +
          form.input4.value + "\"does not knowingly collect any Personal Identifiable Information from children under the age of 13. If you think that your child provided this kind of information on our website, we strongly encourage you to contact us immediately and we will do our best efforts to promptly remove such information from our records.<br><br><h1>Our email id is\n";
        }


if (form.input10.value != "") {
          form.story.value +="\" " +
          form.input10.value + "\" </h1>\n";
        }     
  }
  // <!--Paste Details Here-->  
//<![CDATA[
const generate = document.querySelector('.generate-markup');

generate.addEventListener('click', () => {
const youtubeID = document.querySelector('#youtubeVID').value;
const headline = document.querySelector('#headline').value;
const blurb = document.querySelector('#blurb').value;
const markupContainer = document.querySelector('.generator__markup-generated');

const markup = `
<div>

<h2>Privacy Policy for <b>${youtubeID}</b></h2> <p>At <b>${youtubeID}</b>, accessible from  <b>${headline} </b>, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by ${youtubeID} and how we use it.</p><p>If you have additional questions or require more information about our Privacy Policy, do not hesitate to Contact through email at <b>${blurb}</b></p> <h2>Log Files</h2> <p> <b>${youtubeID}</b> follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this and a part of hosting services analytics. The information collected by log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable. The purpose of the information is for analyzing trends, administering the site, tracking users movement on the website, and gathering demographic information.</p><h2>Cookies and Web Beacons</h2><p>Like any other website, <b>${youtubeID}</b> uses cookies. These cookies are used to store information including visitors preferences and the pages on the website that the visitor accessed or visited. The information is used to optimize the users experience by customizing our web page content based on visitors browser type and/or other information.</p><h2>Google DoubleClick DART Cookie</h2><p>Google is one of a third-party vendor on our site. It also uses cookies, known as DART cookies, to serve ads to our site visitors based upon their visit to www.website.com and other sites on the internet. However, visitors may choose to decline the use of DART cookies by visiting the Google ad and content network Privacy Policy at the following URL &#8211; <a href="https://technovedant.com/">click here</a></p><h2>Privacy Policies</h2><P>You may consult this list to find the Privacy Policy for each of the advertising partners of <b>${youtubeID}</b>. Our Privacy Policy was created with the help of the <a href="https://technovedant.com/">Privacy Policy Generator</a></p><p>Third-party ad servers or ad networks uses technologies like cookies, JavaScript, or Web Beacons that are used in their respective advertisements and links that appear on <b>${youtubeID}</b>, which are sent directly to usersbrowser. They automatically receive your IP address when this occurs. These technologies are used to measure the effectiveness of their advertising campaigns and/or to personalize the advertising content that you see on websites that you visit.</p><p>Note that <b>${youtubeID}</b> has no access to or control over these cookies that are used by third-party advertisers.</p><h2>Third Pary Privacy Policies</h2><p><b>${youtubeID}</b> s Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party ad servers for more detailed information. It may include their practices and instructions about how to opt-out of certain options. You may find a complete list of these Privacy Policies and their links here: Privacy Policy Links.</p><p>You can choose to disable cookies through your individual browser options. To know more detailed information about cookie management with specific web browsers, it can be found at the browsers respective websites. What Are Cookies?</p><h2>Children s Information</h2><p>Another part of our priority is adding protection for children while using the internet. We encourage parents and guardians to observe, participate in, and/or monitor and guide their online activity.</p><p><b>${youtubeID}</b> does not knowingly collect any Personal Identifiable Information from children under the age of 13. If you think that your child provided this kind of information on our website, we strongly encourage you to Contact immediately and we will do our best efforts to promptly remove such information from our records.</p><h2>Online Privacy Policy Only</h2><p>This Privacy Policy applies only to our online activities and is valid for visitors to our website with regards to the information that they shared and/or collect in <b>${youtubeID}</b>. This policy is not applicable to any information collected offline or via channels other than this website.</p><h2>Consent</h2><p>By using our website, you hereby consent to our Privacy Policy and agree to its Terms and Conditions.</p>

</div>
`;

markupContainer.textContent = markup;
});

function copyToClipboard(element) {
var $temp = $("<input>");
$("body").append($temp);
$temp.val($(element).text()).select();
document.execCommand("copy");
$temp.remove();
}

//
// end


