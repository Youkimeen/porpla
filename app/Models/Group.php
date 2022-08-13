<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Group extends Model
{
    protected $fillable = [
    	'id','name','public','avatar'
    ];
    
    protected $hidden = [
    	'timestamp'
    ];
    
    protected $table = "groups";
    
    // team_leader
    public function team_leader(){
    	return $this->hasOne(TeamLeader::class);
    }
    
    // (未)developer_group
    //public function developer_group(){
    //	return $this->belongsToMany(Developer::class);
    //}
    
    // (未)developermessages
    //public function developermessages(){
    //	return $this->belongsToMany(Developer::class)
    //				->withPivot('message')
    //				->withTimestamps();
    //}
    
    // project
    public function project(){
    	return $this->hasMany(Project::class);
    }
}
