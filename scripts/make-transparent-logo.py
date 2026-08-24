from PIL import Image
from pathlib import Path

src = Path(r"C:\Users\Haja.Mainudeen.EUROLAND\.cursor\projects\c-Development-Gitlab-Feeds\assets\c__Users_Haja.Mainudeen.EUROLAND_AppData_Roaming_Cursor_User_workspaceStorage_c56e693874e7bf3c69b7d7d4c7280b82_images_image-7658e0ac-eaf0-4033-a65e-6a580af6bd20.png")
out = Path(r"C:\HajaWorkingFolder\oldFiles\hapyzo-com\public\Logo\hapyzo-logo-on-dark.png")

img = Image.open(src).convert("RGBA")
pixels = img.load()
w, h = img.size

for y in range(h):
    for x in range(w):
        r, g, b, a = pixels[x, y]
        # Dark background (charcoal / navy / near-black) -> transparent
        brightness = (r + g + b) / 3
        # keep bright blues, purples, whites, light greys
        is_dark_bg = brightness < 55 and max(r, g, b) < 90
        # also kill very dark blue-teal plate
        is_dark_teal = r < 40 and g < 55 and b < 70 and brightness < 60
        if is_dark_bg or is_dark_teal:
            pixels[x, y] = (r, g, b, 0)

img.save(out, optimize=True)
print("wrote", out, "size", out.stat().st_size)
