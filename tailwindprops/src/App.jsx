import Card from "./components/Card";
import "./App.css";

function App() {
  let details = {
    details1: {
      name: "Macbook",
      imgUrl: 'https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJsb2d8ZW58MHx8MHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60',
      about:
        "This is about macbook pro consectetur adipisicing elit. Doloribus, error.",
      btnTxt: "Click me",
    },
    details2: {
      name: "Lenovo",
      imgUrl:
        "https://datalockperu.com/wp-content/uploads/2020/04/notebook-lenovo-ideapad-330-156-hd.jpg",
      about:
        "This is about Lenovo pro consectetur adipisicing elit. Doloribus, error.",
      btnTxt: "Visit me",
    },
  };
  return (
    <>
      <h2 className="bg-green-600 text-black p-3 rounded-xs">
        Tailwind CSS Card
      </h2>
      <Card
        newName={details.details1.name}
        btnTxt={details.details1.btnTxt}
        about={details.details1.about}
        imgURL={details.details1.imgUrl}
      />
      <Card
        newName={details.details2.name}
        btnTxt={details.details2.btnTxt}
        about={details.details2.about}
        imgURL={details.details2.imgUrl}
      />
      {/* <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
        <img className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="https://images.pexels.com/photos/20738270/pexels-photo-20738270/free-photo-of-for-honesty-pictures.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" width="384" height="512"/>
        <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
          <blockquote>
            <p className="text-lg font-medium">
              “Tailwind CSS is the only framework that I've seen scale
              on large teams. It’s easy to customize, adapts to any design,
              and the build size is tiny.”
            </p>
          </blockquote>
          <figcaption className="font-medium">
            <div className="text-sky-500 dark:text-sky-400">
              Febry Arya
            </div>
            <div className="text-slate-700 dark:text-slate-500">
              Photographer, Algolia
            </div>
          </figcaption>
        </div>
      </figure> */}
    </>
  );
}

export default App;
