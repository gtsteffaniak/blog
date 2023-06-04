## My experience benchmarking llama

There's a cpp program called "llama.cpp" that has been ported to work with multiple languages, including Python and golang which I use in this comparison.

I have 3 implementations I will test on an M1 arm64 macbook:

 - [llama.cpp]()
 - [llama.go]()


Aren't you a little curious about which is fastest? Admittedly, the native llama.cpp is going to have the advantage. This is not because the language is the fastest, but because it is the "upstream" branch that gets all the changes and performance optimizations first. So, the Python and Golang version may not have these optimizations yet.

## llama.cpp

execution:

```
./main -m ~/models/llama-7b-fp32.bin -c 45 -n 45
main: build = 548 (60f8c36)
main: seed  = 1684077400
llama.cpp: loading model from /Users/steffag/models/llama-7b-fp32.bin
llama_model_load_internal: format     = ggjt v1 (pre #1405)
llama_model_load_internal: n_vocab    = 32000
llama_model_load_internal: n_ctx      = 45
llama_model_load_internal: n_embd     = 4096
llama_model_load_internal: n_mult     = 256
llama_model_load_internal: n_head     = 32
llama_model_load_internal: n_layer    = 32
llama_model_load_internal: n_rot      = 128
llama_model_load_internal: ftype      = 0 (all F32)
llama_model_load_internal: n_ff       = 11008
llama_model_load_internal: n_parts    = 1
llama_model_load_internal: model size = 7B
llama_model_load_internal: ggml ctx size =  72.75 KB
llama_model_load_internal: mem required  = 27497.09 MB (+ 1026.00 MB per state)
llama_init_from_file: kv self size  =   22.50 MB

system_info: n_threads = 8 / 10 | AVX = 0 | AVX2 = 0 | AVX512 = 0 | AVX512_VBMI = 0 | AVX512_VNNI = 0 | FMA = 0 | NEON = 1 | ARM_FMA = 1 | F16C = 0 | FP16_VA = 1 | WASM_SIMD = 0 | BLAS = 1 | SSE3 = 0 | VSX = 0 | 
sampling: repeat_last_n = 64, repeat_penalty = 1.100000, presence_penalty = 0.000000, frequency_penalty = 0.000000, top_k = 40, tfs_z = 1.000000, top_p = 0.950000, typical_p = 1.000000, temp = 0.800000, mirostat = 0, mirostat_lr = 0.100000, mirostat_ent = 5.000000
generate: n_ctx = 45, n_batch = 512, n_predict = 45, n_keep = 0


 ← The Forgotten Story of the First Civil War Battle in Kansas
Making It Home from the Front →
I Have a Dream—That We Finally Learn More About Frederick Douglass!
“I have
llama_print_timings:        load time =  9196.58 ms
llama_print_timings:      sample time =    22.49 ms /    45 runs   (    0.50 ms per token)
llama_print_timings: prompt eval time = 10716.26 ms /    25 tokens (  428.65 ms per token)
llama_print_timings:        eval time = 11689.89 ms /    43 runs   (  271.86 ms per token)
llama_print_timings:       total time = 22483.24 ms
```
Memory usage : 35 MB
CPU usage    : 85%

OK! Easy enough. It took 11 seconds to print, with **272 ms per token**!

## Go llama

```
LIBRARY_PATH=$PWD C_INCLUDE_PATH=$PWD go run ./examples -m ~/models/llama-7b-fp32.bin -n 45      
llama.cpp: loading model from /Users/steffag/models/llama-7b-fp32.bin
llama_model_load_internal: format     = ggjt v1 (pre #1405)
llama_model_load_internal: n_vocab    = 32000
llama_model_load_internal: n_ctx      = 128
llama_model_load_internal: n_embd     = 4096
llama_model_load_internal: n_mult     = 256
llama_model_load_internal: n_head     = 32
llama_model_load_internal: n_layer    = 32
llama_model_load_internal: n_rot      = 128
llama_model_load_internal: ftype      = 0 (all F32)
llama_model_load_internal: n_ff       = 11008
llama_model_load_internal: n_parts    = 1
llama_model_load_internal: model size = 7B
llama_model_load_internal: ggml ctx size =  68.20 KB
llama_model_load_internal: mem required  = 27497.08 MB (+ 2052.00 MB per state)
llama_init_from_file: kv self size  =  128.00 MB
The model loaded successfully.
>>> What is the fastest programming language?

Sending what is the fastest programming language?

by Cary R on Jul 18, 2017, at 6:45 UTC
what do you think it is and why?
I'm not sure what "fast" means for this
llama_print_timings:        load time = 99393.39 ms
llama_print_timings:      sample time =    32.26 ms /    45 runs   (    0.72 ms per token)
llama_print_timings: prompt eval time =  5021.80 ms /    10 tokens (  502.18 ms per token)
llama_print_timings:        eval time = 15193.51 ms /    44 runs   (  345.31 ms per token)
llama_print_timings:       total time = 115311.61 ms
Embeddings: [1.3335894 -0.83280444 0.9414267 -9.215284 -1.0302917 1.065452 -0.4542901 -0.24896632 -0.6570409 1.9119468 0.6292349 -0.14391524 0.2595427 -0.5855895 -0.963376 1.0406973 -0.1605502 1.3280734 0.37920082 0.61060756 -1.2766573 -1.8673204 1.2690753 -0.4294657 0.5546539 0.11715727 0.6430202 -0.09789314 -0.45095867 -1.1076287 0.042604066 0.15544033 -0.09977249 -1.3832492 0.018180523 2.2709634 0.26105422 -1.0794421 0.28251836 -1.2772827 1.3353819 -1.1416842 1.8800831 0.7737296 0.8329498 -1.1428409 -0.27773026 0.59615296 -1.1754322 -0.61925936 0.12707934 0.33790576 0.9590525 -1.0039365 1.2138838 -0.15244572 1.3892341 -0.2408304 -0.41973415 -0.9122008 0.61534476 -1.3473209 1.8957467 0.54428715 -0.45334002 -0.46586785 0.9365548 0.7735351 0.020367475 0.03640651 0.6072077 0.2598248 -0.60497457 0.74164164 -1.4986299 0.030030286 1.0310581 -0.7985864 0.59369475 5.3009334 -0.26436043 -1.0086688 0.69724923 -0.082101144 0.609409 -0.4504542 -0.57361007 -0.43234673 -0.621053 -1.3142335 -1.2885888 -0.29704484 0.16729134 -0.76317424 1.2080128 0.24425012 -0.3169634 0.9270621 1.0773871 -0.09211676 4.2189116 1.1267253 -1.2751623 -0.04176733 -1.0876625 -0.19441187 0.6124146 -0.5224489 -1.346519 -0.129513 -0.12585206 0.9263705 -1.6089619 -1.5251873 1.0640423 1.1027105 -0.5490974 -0.85569364 -1.1080054 0.9023686 -1.0494307 -0.28588632 -0.4288576 -0.72663045 1.7789608 2.239715 0.8199781 0.4134441]
```
Memory usage : 110 MB
CPU usage    : 100%

Ok we have something - **345 ms per token**. Makes sense, since it is an indirect non-native form of calling what is the first test of cpp... except as a shared library via Golang. So what about natives?

```
./llama.go --model ~/models/llama-7b-fp32.bin --prompt "Which programming language is fastest?" --context 45 --predict 45 
                                                    
  /▒▒       /▒▒         /▒▒▒/▒▒▒   /▒▒/▒▒▒▒/▒▒   /▒▒▒/▒▒▒      /▒▒▒▒/▒▒   /▒▒▒/▒▒▒    
  /▒▒▒      /▒▒▒      /▒▒▒/ /▒▒▒ /▒▒▒/▒▒▒▒/▒▒▒ /▒▒▒/ /▒▒▒     /▒▒▒▒ //   /▒▒▒▒//▒▒▒  
  /▒▒▒▒/▒▒  /▒▒▒▒/▒▒  /▒▒▒▒/▒▒▒▒ /▒▒▒/▒▒▒▒/▒▒▒ /▒▒▒▒/▒▒▒▒ /▒▒ /▒▒▒▒/▒▒▒▒ /▒▒▒ /▒▒▒▒ 
  /▒▒▒▒/▒▒▒ /▒▒▒▒/▒▒▒ /▒▒▒ /▒▒▒▒ /▒▒▒//▒▒ /▒▒▒ /▒▒▒ /▒▒▒▒ /▒▒▒//▒▒▒▒/▒▒  //▒▒▒/▒▒▒
  //// ///  //// ///  ///  ////  ///  //  ///  ///  ////  ///  //// //    /// ///

   ▒▒▒▒ [ LLaMA.go v1.4.0 ] [ LLaMA GPT in pure Golang - based on LLaMA C++ ] ▒▒▒▒

[ INIT ] Loading model, please wait .............................

[ PROMPT ] Which programming language is the fastest?
[ OUTPUT ]
 Which programming language is best for a particular task?
 Which programming language should I use to write my program?
 What are the advantages and disadvantages of using a particular programming language?

Comment: @

=== EVAL TIME | ms ===

15247 | 3125 | 1742 | 3636 | 1253 | 1276 | 1420 | 1487 | 1394 | 1628 | 1659 | 5330 | 10200 | 5287 | 3114 | 1320 | 1560 | 1725 | 5190 | 1573 | 1342 | 1440 | 1365 | 3922 | 13103 | 12436 | 3441 | 1597 | 1598 | 1537 | 1487 | 8702 | 3437 | 1780 | 10625 | 15753 | 1869 | 29020 | 7898 | 1574 | 1655 | 1664 | 1652 | 1604 | 1483 | 

=== SAMPLING TIME | ms ===

7 | 7 | 8 | 7 | 7 | 7 | 7 | 7 | 7 | 7 | 7 | 8 | 8 | 7 | 7 | 7 | 7 | 7 | 7 | 7 | 7 | 7 | 7 | 7 | 7 | 8 | 8 | 7 | 7 | 7 | 7 | 8 | 7 | 7 | 8 | 7 | 7 | 7 | 7 | 7 | 7 | 8 | 7 | 7 | 7 | 

=== FULL TIME | ms ===

0 | 15255 | 3132 | 1751 | 3643 | 1260 | 1283 | 1427 | 1495 | 1402 | 1635 | 1667 | 5339 | 10208 | 5295 | 3121 | 1328 | 1568 | 1732 | 5198 | 1581 | 1350 | 1448 | 1372 | 3930 | 13111 | 12444 | 3449 | 1605 | 1606 | 1545 | 1495 | 8710 | 3445 | 1788 | 10633 | 15761 | 1876 | 29028 | 7906 | 1581 | 1663 | 1673 | 1660 | 1612 | 1490 | 

[ HALT ] Time per token: 4380 ms | Tokens per second: 0.23

```
Memory usage : 25 GB
CPU usage    : 85%

Looks like it loaded the entire model into RAM! ok... well does that translate into better performance? Not good. I can tell you it *felt* slow, 4380ms seems ... accurate. Hmm... maybe I should use the neon flag for my m1.

Testing neon first:

```
./llama.go --model ~/models/llama-7b-fp32.bin --prompt "Which programming language is fastest?" --neon --context 45 --predict 45
                                                    
  /▒▒       /▒▒         /▒▒▒/▒▒▒   /▒▒/▒▒▒▒/▒▒   /▒▒▒/▒▒▒      /▒▒▒▒/▒▒   /▒▒▒/▒▒▒    
  /▒▒▒      /▒▒▒      /▒▒▒/ /▒▒▒ /▒▒▒/▒▒▒▒/▒▒▒ /▒▒▒/ /▒▒▒     /▒▒▒▒ //   /▒▒▒▒//▒▒▒  
  /▒▒▒▒/▒▒  /▒▒▒▒/▒▒  /▒▒▒▒/▒▒▒▒ /▒▒▒/▒▒▒▒/▒▒▒ /▒▒▒▒/▒▒▒▒ /▒▒ /▒▒▒▒/▒▒▒▒ /▒▒▒ /▒▒▒▒ 
  /▒▒▒▒/▒▒▒ /▒▒▒▒/▒▒▒ /▒▒▒ /▒▒▒▒ /▒▒▒//▒▒ /▒▒▒ /▒▒▒ /▒▒▒▒ /▒▒▒//▒▒▒▒/▒▒  //▒▒▒/▒▒▒
  //// ///  //// ///  ///  ////  ///  //  ///  ///  ////  ///  //// //    /// ///

   ▒▒▒▒ [ LLaMA.go v1.4.0 ] [ LLaMA GPT in pure Golang - based on LLaMA C++ ] ▒▒▒▒

[ INIT ] Loading model, please wait .............................

[ PROMPT ] Which programming language is the fastest?
[ OUTPUT ]
 Which programming language is easiest to use?
 Which programming language is the best for beginners?
 Which programming language is the best for experienced programmers?
 Which programming language has the most potential?
 Which programming

=== EVAL TIME | ms ===

12559 | 3044 | 310 | 307 | 355 | 360 | 309 | 324 | 305 | 318 | 324 | 329 | 328 | 313 | 306 | 319 | 315 | 317 | 314 | 320 | 331 | 315 | 321 | 313 | 314 | 324 | 335 | 342 | 325 | 312 | 321 | 315 | 309 | 330 | 307 | 324 | 343 | 5317 | 312 | 312 | 307 | 319 | 323 | 316 | 309 | 

=== SAMPLING TIME | ms ===

7 | 7 | 7 | 7 | 7 | 7 | 7 | 7 | 7 | 7 | 7 | 7 | 7 | 7 | 7 | 7 | 7 | 7 | 7 | 7 | 7 | 7 | 7 | 7 | 7 | 7 | 7 | 7 | 7 | 7 | 7 | 7 | 7 | 7 | 7 | 7 | 7 | 7 | 7 | 7 | 7 | 7 | 7 | 7 | 7 | 

=== FULL TIME | ms ===

0 | 12567 | 3051 | 318 | 315 | 363 | 367 | 316 | 331 | 313 | 326 | 331 | 337 | 336 | 321 | 313 | 326 | 323 | 325 | 321 | 328 | 339 | 322 | 328 | 321 | 322 | 331 | 342 | 350 | 333 | 319 | 329 | 323 | 316 | 338 | 314 | 332 | 350 | 5325 | 320 | 320 | 315 | 327 | 331 | 324 | 316 | 

[ HALT ] Time per token: 754 ms | Tokens per second: 1.33
```

Memory usage : 25GB
CPU usage    : 66%

That was much faster! Although the output shows it was only **754 ms per token**. Ouch , an L for golang. But upon closer inspection, the first token takes 40x times longer and the second 10x longer than all the other tokens. So that is skewing the average, realistically it felt faster - **315 ms per token** does seem more accurate. Though, I can see the program wasn't fully optimized - it didn't use the entire CPU available. Sigh... we will have to wait for better optimizations. It really is sad it has to load the model into ram -- the native cpp version only uses a small amount of ram to accomplish the same thing faster.

Any way we can use 100% of the CPU and squeeze out better performance? let's try.

1. using `--neon --context 45 --predict 45 --threads 10 --silent --profile
2023/05/14 10:25:56 profile: CPU profiling enabled, cpu.pprof` I get 65% usage with 675 ms.
2. 20 threads get 772ms
3. 6 gave 50% usage with 745 ms per token
4. 4 gave 35% usage with 915 ms per token
5. 2 gave 20% usage with 1608 ms per token

All runs behaved similarly - the first 2 tokens take forever, but then performance picks up. Realistically, if there were better optimizations, the native go version could see faster performance than the native cpp version if it utilized all CPU threads via goroutines efficiently. However, at this time it isn't ideal for performance reasons and for the fact it lacks the nice feature of the native cpp version of loading the model in small chunks that don't use up 25GB of RAM.

Ok, that's enough of that.

## Bonus round

The llama.cpp repo released GPU support for the program - so I had to try that out too. I don't have anything too beefy to test it on , but I have a 1050 GPU laptop. So I went there and tested with GPU support enabled:

```
.\main.exe -m C:\Users\graha\OneDrive\Desktop\llama-7b-fp32.bin -p "what is a banana doing on my lawn?" -t 12 -ngl 4 -c 45 -n 45
main: build = 550 (79b2d5b)
main: seed  = 1684092347
llama.cpp: loading model from C:\Users\graha\OneDrive\Desktop\llama-7b-fp32.bin
llama_model_load_internal: format     = ggjt v1 (pre #1405)
llama_model_load_internal: n_vocab    = 32000
llama_model_load_internal: n_ctx      = 45
llama_model_load_internal: n_embd     = 4096
llama_model_load_internal: n_mult     = 256
llama_model_load_internal: n_head     = 32
llama_model_load_internal: n_layer    = 32
llama_model_load_internal: n_rot      = 128
llama_model_load_internal: ftype      = 0 (all F32)
llama_model_load_internal: n_ff       = 11008
llama_model_load_internal: n_parts    = 1
llama_model_load_internal: model size = 7B
llama_model_load_internal: ggml ctx size =  72.75 KB
llama_model_load_internal: mem required  = 27497.09 MB (+ 1026.00 MB per state)
llama_model_load_internal: [cublas] offloading 4 layers to GPU
llama_model_load_internal: [cublas] total VRAM used: 3088 MB
llama_init_from_file: kv self size  =   22.50 MB

system_info: n_threads = 12 / 12 | AVX = 1 | AVX2 = 1 | AVX512 = 0 | AVX512_VBMI = 0 | AVX512_VNNI = 0 | FMA = 1 | NEON = 0 | ARM_FMA = 0 | F16C = 1 | FP16_VA = 0 | WASM_SIMD = 0 | BLAS = 1 | SSE3 = 1 | VSX = 0 |
sampling: repeat_last_n = 64, repeat_penalty = 1.100000, presence_penalty = 0.000000, frequency_penalty = 0.000000, top_k = 40, tfs_z = 1.000000, top_p = 0.950000, typical_p = 1.000000, temp = 0.800000, mirostat = 0, mirostat_lr = 0.100000, mirostat_ent = 5.000000
generate: n_ctx = 45, n_batch = 512, n_predict = 45, n_keep = 0


 what is a banana doing on my lawn?
the other day i was looking out the window and saw a banana sitting in our front yard. i walked outside to see if anyone had left it there by accident, but no one answered when i called for them inside
llama_print_timings:        load time = 35609.62 ms
llama_print_timings:      sample time =    10.52 ms /    45 runs   (    0.23 ms per token)
llama_print_timings: prompt eval time = 31931.20 ms /    35 tokens (  912.32 ms per token)
llama_print_timings:        eval time = 36327.48 ms /    43 runs   (  844.83 ms per token)
llama_print_timings:       total time = 74111.62 ms
```
CPU usage    : 100%
memory usage : 25GB

Hmm ok so GPU support doesn't really help much other than offloading some of the RAM -- **844 ms per token** (similar without GPU). So, for the macbook optimized code, it doesn't use any RAM at all. So, maybe if you have a super GPU that can really crunch through processing , I don't see GPU helping much with this version of llama program. Cool to see though!

## Conclusion

What did we learn? optimizations are important, languages matter, and python is complicated to get everything wired up to work low-level, so I didn't bother comparing it.
