<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Faker\Factory as Faker;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        User::truncate();

        $faker = Faker::create();

        foreach(range(1, 100) as $index){
            User::create([
                'name' => $faker->name,
                'email' => $faker->email,
                'password' => $faker->password()
            ]);
        }
    }
}
