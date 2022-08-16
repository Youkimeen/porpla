<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    protected $fillable = [
    	'id','group_id','name','group_url','description'
    ];
    
    protected $hidden = [
    	'timestamps'
    ];
    
    protected $table = "projects";
    
    // group
    public function group(){
    	return $this->belongsTo(Group::class);
    }
}
