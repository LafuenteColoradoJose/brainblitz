<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Level;

class LevelSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Level::create([
            "name"=> "Beginner",
            "requiered_score"=> 0,
            "icon_uri"=> asset('images/levels/beginner.svg')
        ]);

        Level::create([
            "name"=> "Apprentice",
            "requiered_score"=> 1000,
            "icon_uri"=> asset('images/levels/apprentice.svg')
        ]);

        Level::create([
            "name"=> "Intermediate",
            "requiered_score"=> 3000,
            "icon_uri"=> asset('images/levels/intermediate.svg')
        ]);

        Level::create([
            "name"=> "Advanced",
            "requiered_score"=> 6000,
            "icon_uri"=> asset('images/levels/advanced.svg')
        ]);

        Level::create([
            "name" => 'Expert',
            "requiered_score"=> 10000,
            "icon_uri"=> asset('images/levels/expert.svg')
            ]);
        
    }
}
