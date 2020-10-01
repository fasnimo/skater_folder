# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Skate.destroy_all

# skates = Skate.create([
#     {level: "urban", name: "powerslide"},
#     {level: "recreational", name: "rollerblade"}
#     ])
Skate.create(level: "urban", name: "PowerSlide Next", url: "https://www.inlinewarehouse.com/Powerslide_Next_Core_110/descpage-908366.html")
Skate.create(level: "recreational", name: "Rollerblade XL", url: "https://www.inlinewarehouse.com/Rollerblade_XL/descpage-XL1A.html")
Skate.create(level: "urban", name: "PowerSlide Zoom", url: "https://www.inlinewarehouse.com/Powerslide_Zoom_Pro_100/descpage-908336.html")
Skate.create(level: "recreational", name: "K2 Alexis", url: "https://www.inlinewarehouse.com/K2_Alexis_84_BOA/descpage-201601.html")
Skate.create(level: "urban", name: "PowerSlide Hardcore Evo", url: "https://www.inlinewarehouse.com/Powerslide_Hardcore_Evo_Pro/descpage-908277.html")
Skate.create(level: "recreational", name: "PowerSlide Phuzion Radon", url: "https://www.inlinewarehouse.com/Powerslide_Phuzion_Radon_90/descpage-902011.html")
Skate.create(level: "urban", name: "Rollerblade Tister Edge", url: "https://www.inlinewarehouse.com/Rollerblade_Twister_Edge_110_3WD/descpage-TE310BS.html")
Skate.create(level: "recreational", name: "K2 Fit", url: "https://www.inlinewarehouse.com/K2_FIT_80_Boa/descpage-200901.html")
Skate.create(level: "urban", name: "FR FR1", url: "https://www.inlinewarehouse.com/FR_FR1_325/descpage-1325B18.html")
Skate.create(level: "recreational", name: "Rollerblade Macroblade", url: "https://www.inlinewarehouse.com/Rollerblade_Microblade_Free_3WD/descpage-MBF3B.html")
Skate.create(level: "urban", name: "K2 Sodo", url: "https://www.inlinewarehouse.com/K2_Sodo/descpage-02401.html")
Skate.create(level: "aggressive", name: "Them 909 Danny", url: "https://www.inlinewarehouse.com/Them_909_Danny_Beer_Pro/descpage-T909D.html")
Skate.create(level: "speed", name: "PowerSlide XXX", url: "https://www.inlinewarehouse.com/Powerslide_XXX/descpage-904522.html")
Skate.create(level: "aggressive", name: "GAWDS FM2", url: "https://www.inlinewarehouse.com/GAWDS_FM2_Taxi_Pro/descpage-430046.html")
Skate.create(level: "speed", name: "PowerSlide Icon Windy", url: "https://www.inlinewarehouse.com/Powerslide_Icon_Wind_Trinity_125/descpage-904481.html")
Skate.create(level: "aggressive", name: "USD Aeon", url: "https://www.inlinewarehouse.com/USD_Aeon_80/descpage-710136.html")