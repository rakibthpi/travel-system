export async function postImages(cloudName, formDate) {
    const res = await fetch(`https://api.cloudinary.com/v1_1/${cloudName}/image/upload`, {
        method: "post",
        body: formDate
    })
    const data = await res.json()

    const imageUrl = data["secure_url"]

    return imageUrl
}