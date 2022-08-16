<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TeamLeader extends Model
{
    protected $fillable = [
    	'id','group_id','developer_id'
    ];
    
    protected $table = "team_leader";
    
    // developer
    public function developer(){
    	return $this->belongsTo(Developer::class);
    }
    
    // group
    public function group(){
    	return $this->belongsTo(Group::class);
    }
}
