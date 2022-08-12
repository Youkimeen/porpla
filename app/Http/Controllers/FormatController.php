<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;
use App\Models\Post;

class FormatController extends Controller
{
    public function markdown(){
        $value = request('value');

        return Str::of($value)->markdown();
    }

    public function store(Post $post){
        $value = request('markdown');

        $post -> user_id = Auth::id();
        $post -> content = $value;

        $post->save();

        return 200;
    }
}
