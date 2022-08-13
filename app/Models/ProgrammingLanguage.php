<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProgrammingLanguage extends Model
{
    protected $fillable = [
    	'id','developer_id','programming_language','experience'
    ];
    
    protected $hidden = [
    ];
    
    protected $table = "programming_language";
    
    // developer
    public function developer(){
    	return $this->belongsTomany(Developer::class)
    				->withPivot(['experience']);
    }
    
    // (未)developer_programming
    //public function developer_programming(){
    //	return $this->belongsTomany(DeveloperProgramming::class);
    //}
}
