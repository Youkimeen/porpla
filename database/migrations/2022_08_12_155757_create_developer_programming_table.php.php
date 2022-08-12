<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('developer_programming', function (Blueprint $table) {
            $table->id();
            $table->foreignId('developer_id')->constrained('developers')->onDelete('cascade');
            $table->foreignId('programming_language')->constrained('programming_language')->onDelete('cascade');
            $table->date('experience');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('developer_programming');
    }
};
