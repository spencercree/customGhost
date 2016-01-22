Go to code injection, then paste this snippet in the blog footer. Change my social media profiles out with yours. If you do not want social media icons then do not insert this snippet and they will not appear.

<script>
  var instagram = "https://www.instagram.com/spencexyz/";
  var facebook = "https://www.facebook.com/spencexyz";
  var twitter = "https://twitter.com/spencemcc";
  var github;
  
  if(twitter) {
      var twitterIcon = document.getElementById('twitter');
  twitterIcon.setAttribute('href', twitter);
      twitterIcon.style.display = "inline-block";
  }
  
  if(facebook) {
      var twitterIcon = document.getElementById('facebook');
  twitterIcon.setAttribute('href', twitter);
      twitterIcon.style.display = "inline-block";
  }
  
  if(instagram) {
      var twitterIcon = document.getElementById('instagram');
  twitterIcon.setAttribute('href', twitter);
      twitterIcon.style.display = "inline-block";
  }
  
  if(github) {
      var twitterIcon = document.getElementById('github');
  twitterIcon.setAttribute('href', twitter);
      twitterIcon.style.display = "inline-block";
  }
</script>
