button = document.getElementById("gene");
button.addEventListener("click", horoscope);

function horoscope() {
  let bday = document.getElementById("date").value;
  bday = bday.split("-");
  day = parseInt(bday[2], 10);
  month = parseInt(bday[1], 10);

  if ((month === 03 && day >= 21) || (month === 04 && day <= 19)) {
    document.getElementById("img").innerHTML = "<img src='https://www.horoscope.com/images-US/signs/profile-aries.png'width=20%>";
    document.getElementById("astrology").innerHTML = "Aries";
    document.getElementById("element").innerHTML = "Element: <br> Fire";
    document.getElementById("planet").innerHTML = "Planet: <br> Mars";
    document.getElementById("compatibility").innerHTML = "Compatibility: <br> Libra, Leo";
    document.getElementById("strengths").innerHTML = "Strengths: <br>  courageous, determined, confident, enthusiastic, optimistic, honest, passionate";
    document.getElementById("weaknesses").innerHTML = "Weaknesses: <br> impatient, moody, short-tempered, impulsive, aggressive";
  } else if ((month === 04 && day >= 20) || (month === 05 && day <= 20)) {
    document.getElementById("img").innerHTML = "<img src='https://www.horoscope.com/images-US/signs/profile-taurus.png'width=20%>";
    document.getElementById("astrology").innerHTML = "Taures";
    document.getElementById("element").innerHTML = "Element: <br> Earth";
    document.getElementById("planet").innerHTML = "Planet: <br> Venus";
    document.getElementById("compatibility").innerHTML = "Compatibility: <br> Scorpio, Cancer";
    document.getElementById("strengths").innerHTML = "Strengths: <br>  gentle, affectionate, curious, adaptable, ability to learn quickly and exchange ideas";
    document.getElementById("weaknesses").innerHTML = "Weaknesses: <br> stubborn, possessive, uncompromising";
  } else if ((month === 05 && day >= 21) || (month === 06 && day <= 20)) {
    document.getElementById("img").innerHTML = "<img src='https://www.horoscope.com/images-US/signs/profile-gemini.png'width=20%>";
    document.getElementById("astrology").innerHTML = "Gemini";
    document.getElementById("element").innerHTML = "Element: <br> Air";
    document.getElementById("planet").innerHTML = "Planet: <br> Mercury";
    document.getElementById("compatibility").innerHTML = "Compatibility: <br> Sagittarius, Aquarius";
    document.getElementById("strengths").innerHTML = "Strengths: <br> gentle, affectionate, curious, adaptable, ability to learn quickly and exchange ideas";
    document.getElementById("weaknesses").innerHTML = "Weaknesses: <br> nervous, inconsistent, indecisive";
  } else if ((month === 06 && day >= 21) || (month === 07 && day <= 22)) {
    document.getElementById("img").innerHTML = "<img src='https://www.horoscope.com/images-US/signs/profile-cancer.png'width=20%>";
    document.getElementById("astrology").innerHTML = "Cancer";
    document.getElementById("element").innerHTML = "Element: <br> Water";
    document.getElementById("planet").innerHTML = "Planet: <br> Moon";
    document.getElementById("compatibility").innerHTML = "Compatibility: <br> Capricorn, Taurus";
    document.getElementById("strengths").innerHTML = "Strengths: <br> tenacious, highly imaginative, loyal, emotional, sympathetic, persuasive";
    document.getElementById("weaknesses").innerHTML = "Weaknesses: <br> moody, pessimistic, suspicious, manipulative, insecure";
  } else if ((month === 07 && day >= 23) || (month === 08 && day <= 22)) {
    document.getElementById("img").innerHTML = "<img src='https://www.horoscope.com/images-US/signs/profile-leo.png'width=20%>";
    document.getElementById("astrology").innerHTML = "Leo";
    document.getElementById("element").innerHTML = "Element: <br> Fire";
    document.getElementById("planet").innerHTML = "Planet: <br> Sun";
    document.getElementById("compatibility").innerHTML = "Compatibility: <br> Aquarius, Gemini";
    document.getElementById("strengths").innerHTML ="Strengths: <br> creative, passionate, generous, warm-hearted, cheerful, humorous";
    document.getElementById("weaknesses").innerHTML = "Weaknesses: <br> arrogant, stubborn, self-centered, lazy, inflexible";
  } else if ((month === 08 && day >= 23) || (month === 09 && day <= 22)) {
    document.getElementById("img").innerHTML = "<img src='https://www.horoscope.com/images-US/signs/profile-virgo.png'width=20%>";
    document.getElementById("astrology").innerHTML = "Virgo";
    document.getElementById("element").innerHTML = "Element: <br> Earth";
    document.getElementById("planet").innerHTML = "Planet: <br> Mercury";
    document.getElementById("compatibility").innerHTML = "Compatibility: <br> Pisces, Cancer";
    document.getElementById("strengths").innerHTML = "Strengths: <br> loyal, analytical, kind, hardworking, practical";
    document.getElementById("weaknesses").innerHTML = "Weaknesses: <br> shyness, worry, overly critical of self and others, all work and no play";
  } else if ((month === 09 && day >= 23) || (month === 10 && day <= 22)) {
    document.getElementById("img").innerHTML = "<img src='https://www.horoscope.com/images-US/signs/profile-libra.png'width=20%>";
    document.getElementById("astrology").innerHTML = "Libra";
    document.getElementById("element").innerHTML = "Element: <br> Air";
    document.getElementById("planet").innerHTML = "Planet: <br> Venus";
    document.getElementById("compatibility").innerHTML = "Compatibility: <br> Aries, Sagittarius";
    document.getElementById("strengths").innerHTML = "Strengths: <br> cooperative, diplomatic, gracious, fair-minded, social";
    document.getElementById("weaknesses").innerHTML = "Weaknesses: <br> indecisive, avoids confrontations, will carry a grudge, self-pity";
  } else if ((month === 10 && day >= 23) || (month === 11 && day <= 21)) {
    document.getElementById("img").innerHTML = "<img src='https://www.horoscope.com/images-US/signs/profile-scorpio.png'width=20%>";
    document.getElementById("astrology").innerHTML = "Scropio";
    document.getElementById("element").innerHTML = "Element: <br> Water";
    document.getElementById("planet").innerHTML = "Planet: <br> Pluto, Mars";
    document.getElementById("compatibility").innerHTML = "Compatibility: <br> Taurus, Cancer";
    document.getElementById("strengths").innerHTML = "Strengths: <br> resourceful, brave, passionate, stubborn, a true friend";
    document.getElementById("weaknesses").innerHTML = "Weaknesses: <br> distrusting, jealous, secretive, violent";
  } else if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) {
    document.getElementById("img").innerHTML = "<img src='https://www.horoscope.com/images-US/signs/profile-sagittarius.png'width=20%>";
    document.getElementById("astrology").innerHTML = "Sagittarius";
    document.getElementById("element").innerHTML = "Element: <br> Fire";
    document.getElementById("planet").innerHTML = "Planet: <br> Jupiter";
    document.getElementById("compatibility").innerHTML = "Compatibility: <br> Gemini, Aries";
    document.getElementById("strengths").innerHTML = "Strengths: <br> generous, idealistic, great sense of humor";
    document.getElementById("weaknesses").innerHTML = "Weaknesses: <br> promises more than can deliver, very impatient, will say anything no matter how undiplomatic";
  } else if ((month === 12 && day >= 22) || (month === 01 && day <= 19)) {
    document.getElementById("img").innerHTML = "<img src='https://www.horoscope.com/images-US/signs/profile-capricorn.png'width=20%>";
    document.getElementById("astrology").innerHTML = "Capricorn";
    document.getElementById("element").innerHTML = "Element: <br> Earth";
    document.getElementById("planet").innerHTML = "Planet: <br> Saturn";
    document.getElementById("compatibility").innerHTML = "Compatibility: <br> Taures, Cancer";
    document.getElementById("strengths").innerHTML = "Strengths: <br> responsible, disciplined, self-control, good managers";
    document.getElementById("weaknesses").innerHTML = "Weaknesses: <br> know-it-all, unforgiving, condescending, expecting the worst";
  } else if ((month === 01 && day >= 20) || (month === 02 && day <= 18)) {
    document.getElementById("img").innerHTML = "<img src='https://www.horoscope.com/images-US/signs/profile-aquarius.png'width=20%>";
    document.getElementById("astrology").innerHTML = "Aquarius";
    document.getElementById("element").innerHTML = "Element: <br> Air";
    document.getElementById("planet").innerHTML = "Planet: <br> Uranus, Saturn";
    document.getElementById("compatibility").innerHTML = "Compatibility: <br> Leo, Sagittarius";
    document.getElementById("strengths").innerHTML = "Strengths: <br> Progressive, original, independent, humanitarian";
    document.getElementById("weaknesses").innerHTML = "Weaknesses: <br> Runs from emotional expression, temperamental, uncompromising, aloof";
  } else if ((month === 02 && day >= 19) || (month === 03 && day <= 20)) {
    document.getElementById("img").innerHTML = "<img src='https://www.horoscope.com/images-US/signs/profile-pisces.png'width=20%>";
    document.getElementById("astrology").innerHTML = "Pisces";
    document.getElementById("element").innerHTML = "Element: <br> Water";
    document.getElementById("planet").innerHTML = "Planet: <br> Neptune, Jupiter";
    document.getElementById("compatibility").innerHTML = "Compatibility: <br> Virgo, Taurus";
    document.getElementById("strengths").innerHTML = "Strengths: <br> Compassionate, artistic, intuitive, gentle, wise, musical";
    document.getElementById("weaknesses").innerHTML = "Weaknesses: <br> Fearful, overly trusting, sad, desire to escape reality, can be a victim or a martyr";
  } else {
    document.getElementById("element").innerHTML =
      "You didn't enter in a date";
  }
}
