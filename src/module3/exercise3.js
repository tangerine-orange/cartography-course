/**
 * I like using Mapbox more than Leaflet, but mostly for aesthetic reasons. Mapbox felt more dynamic,
 * and more similar to what I'm used to (e.g. Google Maps). This is probably due to Mapbox using
 * a vector map and Leaflet using images. In a brief manual survey, it seemed like the two packages
 * downloaded about the same amount of data, but I would need to do a programmatic comparison to be sure.
 * 
 * In terms of the APIs, they were fairly similar. I think I would need to use them both more to
 * really get a feel for which has more functionality and which is easier. It was nice that Leaflet did
 * not require an API key, but I'm not sure if that's a good thing or not. I'm not sure if it's a good
 * thing because I don't know if it means that Leaflet is less secure. I did have to do some research on
 * key management in Mapbox though as well, since you have to include your Mapbox key in the front-end code,
 * which is generally a terrible idea. Fortunately, Mapbox has a protocol for key management, and even allows
 * you to dynamically generate one-off keys when you need to do non-public writes to your account.
 * 
 * I'd also note that I ended up adding webpack to my project at this point, so that I could use
 * some of the functions that I had written in previous exercises in my front-end code.
 */