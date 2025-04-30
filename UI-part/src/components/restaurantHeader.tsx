

const RestaurantHeader =({name}:{name:string})=> {
    return (
        <div className="bg-gradient-to-r from-purple-700/60 to-slate-900 py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="mb-2 text-4xl font-bold text-white md:text-5xl">{name}</h1>
          <p className="mx-auto max-w-2xl text-slate-300">
            Experience the finest culinary delights with our award-winning dishes prepared by expert chefs
          </p>
        </div>
      </div>

    )
}

export default RestaurantHeader

