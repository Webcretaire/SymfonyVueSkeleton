<?php

namespace App\Controller;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpKernel\KernelInterface;

/**
 * Class ExampleController
 */
class ExampleController extends AbstractController
{
    /**
     * @Route("/example", name="example_route")
     *
     * @param KernelInterface $kernel
     *
     * @return JsonResponse
     */
    public function example(KernelInterface $kernel) {
        return $this->json(['project_dir' => $kernel->getProjectDir()]);
    }
}