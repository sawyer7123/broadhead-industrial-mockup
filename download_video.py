import urllib.request
import os

url = "https://videos.pexels.com/video-files/5532766/5532766-hd_1920_1080_25fps.mp4"
out = os.path.join("public", "hero-video.mp4")
os.makedirs("public", exist_ok=True)

opener = urllib.request.build_opener()
opener.addheaders = [
    ('User-Agent', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'),
    ('Referer', 'https://www.pexels.com/'),
    ('Accept', 'text/html,application/xhtml+xml,application/xml;q=0.9,video/mp4,*/*;q=0.8'),
]
urllib.request.install_opener(opener)

try:
    urllib.request.urlretrieve(url, out)
    size = os.path.getsize(out)
    print(f"SUCCESS: Downloaded {size} bytes to {out}")
except Exception as e:
    print(f"Pexels failed: {e}")
    # Try alternative: coverr.co free videos
    alt_url = "https://storage.coverr.co/videos/coverr-welding-sparks-1669/preview?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9"
    try:
        urllib.request.urlretrieve(alt_url, out)
        size = os.path.getsize(out)
        print(f"SUCCESS (alt): Downloaded {size} bytes to {out}")
    except Exception as e2:
        print(f"All downloads failed: {e2}")
        print("FALLBACK_NEEDED")
