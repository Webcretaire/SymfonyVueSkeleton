<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;

/**
 * Class FrontController
 */
class FrontController extends AbstractController
{
    /**
     * Serves the frontend app
     *
     * @return Response
     */
    public function serve(): Response
    {
        return $this->render('front.html.twig');
    }
}
