<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Survey;

class DashboardController extends Controller
{
    public function index(Request $request) 
    {
        $user = $request->user();

        // Total Number of Surveys
        $total = Survey::query()->where('user_id', $user->id)->count();

        // Latest Surveys
        $latest = Survey::query()->where('user_id', $user->id)->latest('created_at')->first();       

        // Latest Five Answers

        return [
            'totalSurveys' => $total,
            'latestSurvey' => $latest,            
        ];
    }
}
