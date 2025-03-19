<?php

namespace Tests\Unit;

use PHPUnit\Framework\TestCase;

class ExampleTest extends TestCase
{
    /**
     * A basic test example.
     */
    public function test_that_true_is_true(): void
    {
        $this->assertTrue(true);
        $this->assertTrue(true);
        $this->assertTrue(true);
    }
    public function test2(): void
    {
        $this->expectOutputString('hello');
        print('hello');
    }
    public function test():void{
        $name='Bob';
        $value='Hello, '.$name;

        $expected='Hello, Bob';

        $this->assertSame($expected,$value);
    }
}
