<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\SurveyQuestion;

class Survey extends Model
{
    use HasFactory;

    const TYPE_TEXT = 'text';
    const TYPE_TEXTAREA = 'textarea';
    const TYPE_SELECT = 'select';
    const TYPE_RADIO = 'radio';
    const TYPE_CHECKBOX = 'checkbox';

    protected $fillable = ['user_id', 'title', 'image', 'status', 'description', 'expire_date'];

    public function questions() 
    {
        return $this->hasMany(SurveyQuestion::class);
    }

    public function answers() 
    {
        return $this->hasMany(SurveyAnswer::class);
    }
}
