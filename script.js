

// let ran = Math.floor(Math.random(0) * 10);


// joke.innerHTML = ["What do you call a dinosaur with a wide vocabulary? : <br>A thesaurus"
//           , "What do you call a fake noodle? : <br>An impasta"
//           , "Why did the teddy bear say no to dessert? : <br>Because she was stuffed"
//           , "How do you stop an astronaut’s baby from crying? : <br>You rocket"
//           , "What is a snake’s favorite subject?: <br>Hiss-tory"
//           , "How do you get a tissue to dance? : <br>You put a little boogie into it"
//           , "How does the ocean say hello? : <br>It waves"
//           , "What are the strongest days of the week? : <br>Saturday and Sunday. The rest are weak days. "
//           , "Why can’t you give Elsa a balloon? : <br>She will let it go"
//           , "How do you make the number 7 even? : <br>Remove the S"][ran]









let myjokes = ["What do you call a dinosaur with a wide vocabulary? : <br>A thesaurus"
          , "What do you call a fake noodle? : <br>An impasta"
          , "Why did the teddy bear say no to dessert? : <br>Because she was stuffed"
          , "How do you stop an astronaut’s baby from crying? : <br>You rocket"
          , "What is a snake’s favorite subject?: <br>Hiss-tory"
          , "How do you get a tissue to dance? : <br>You put a little boogie into it"
          , "How does the ocean say hello? : <br>It waves"
          , "What are the strongest days of the week? : <br>Saturday and Sunday. The rest are weak days. "
          , "Why can’t you give Elsa a balloon? : <br>She will let it go"
          , "How do you make the number 7 even? : <br>Remove the S"]
        

console.log(myjokes.length)
let ran = Math.floor(Math.random() * myjokes.length);
joke.innerHTML = myjokes[ran];