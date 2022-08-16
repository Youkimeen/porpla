<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Developer extends Model
{
    protected $fillable = [
        'id','name','gender','email','developer_avatar','password','age'
    ];
    
    protected $hidden = [
    	'email_verified_at','password','rememberToken','timestamps'
    ];
    
    protected $casts = [
    	'email_verified_at' => 'datetime'
    ];
    
    protected $table = "developers";
    
    // team_leader
    public function team_leader(){
    	return $this->hasOne(TeamLeader::class);
    }
    
    // (未)developer_group
    //public function developer_group(){
    //	return $this->belongsToMany(DeveloperGroup::class);
    //}
    
    // programming_language (experience)
    public function programming_language(){
    	return $this->belongsTomany(ProgrammingLanguage::class,'developer_programming')
    				->withPivot(['experience']);
    }
    
    // (未)groups (message)
    //public function groups(){
    //	return $this->belongsTomany(Group::class,'developer_id','group_id')
    //				->withPivot(['message'])
    //				->withTimestamps()
    //}
}
