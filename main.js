const linksSocialMedia = {
  github: 'carlosnogueiraa',
  youtube: 'carlosnogueiraa',
  facebook: 'carlosnogueiraa',
  instagram: 'carlosnogueiraa',
  twitter: 'carlosnogueiraa'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`
  }
}

changeSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${linksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      loginGitHub.textContent = data.login
      userLink.href = data.html_url
      userImage.src = data.avatar_url
    })
}

getGitHubProfileInfos()
