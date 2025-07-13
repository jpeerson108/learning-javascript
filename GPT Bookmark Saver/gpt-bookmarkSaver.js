const form = document.getElementById("bookmark-form")
const siteNameInput = document.getElementById("site-name")
const siteUrlInput = document.getElementById("site-url")
const bookmarkList = document.getElementById("bookmark-list")

form.addEventListener("submit", (e) => {
  e.preventDefault()

  const siteName = siteNameInput.value.trim()
  const siteUrl = siteUrlInput.value.trim()

  console.log(siteName)
  console.log(siteUrl)

  if (!siteName || !siteUrl) {
    alert("Please fill all fields")
    return
  }

  const newListItem = document.createElement("li")

  const newAnchor = document.createElement("a")
  newAnchor.textContent = siteName
  newAnchor.href = siteUrl

  newListItem.appendChild(newAnchor)
  bookmarkList.appendChild(newListItem)

  siteNameInput.value = ""
  siteUrlInput.value = ""
})
