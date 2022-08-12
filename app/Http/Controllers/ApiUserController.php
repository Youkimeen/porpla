<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;

class ApiUserController extends Controller
{
    public function get_all_users(){
        return response()->json([
            "users" => User::all(),
            "message" => "Normal user"
        ]);
    }

    public function search($query){
          $users = $query ? User::search($query)->get() : User::all();

          return response()->json([
              "users" => $users
          ]);
    }
}
