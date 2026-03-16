import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:webview_flutter/webview_flutter.dart';

void main() async {

  WidgetsFlutterBinding.ensureInitialized();

  // Lock orientation portrait
  await SystemChrome.setPreferredOrientations([
    DeviceOrientation.portraitUp,
  ]);

  // Edge-to-edge UI
  SystemChrome.setEnabledSystemUIMode(SystemUiMode.edgeToEdge);

  runApp(const CalculatorApp());

}

class CalculatorApp extends StatelessWidget {

  const CalculatorApp({super.key});

  @override
  Widget build(BuildContext context) {

    return MaterialApp(
      debugShowCheckedModeBanner: false,
      home: const CalculatorWebView(),

      builder: (context, child) {

        final brightness = MediaQuery.of(context).platformBrightness;

        if (brightness == Brightness.dark) {

          SystemChrome.setSystemUIOverlayStyle(
            const SystemUiOverlayStyle(
              statusBarColor: Color(0xFF131720),
              systemNavigationBarColor: Color(0xFF131720),
              statusBarIconBrightness: Brightness.light,
              systemNavigationBarIconBrightness: Brightness.light,
            ),
          );

        } else {

          SystemChrome.setSystemUIOverlayStyle(
            const SystemUiOverlayStyle(
              statusBarColor: Color(0xFFFFFFFF),
              systemNavigationBarColor: Color(0xFFFFFFFF),
              statusBarIconBrightness: Brightness.dark,
              systemNavigationBarIconBrightness: Brightness.dark,
            ),
          );

        }

        return child!;

      },
    );
  }
}

class CalculatorWebView extends StatefulWidget {

  const CalculatorWebView({super.key});

  @override
  State<CalculatorWebView> createState() => _CalculatorWebViewState();

}

class _CalculatorWebViewState extends State<CalculatorWebView> {

  late final WebViewController controller;

  @override
  void initState() {

    super.initState();

    controller = WebViewController()
      ..setJavaScriptMode(JavaScriptMode.unrestricted)
      ..setBackgroundColor(const Color(0xFFFFFFFF))
      ..enableZoom(false)

      ..addJavaScriptChannel(
        'Haptic',
        onMessageReceived: (message) {
            HapticFeedback.selectionClick();
        },
      )

      ..loadFlutterAsset('app/index.html');

  }

  @override
  Widget build(BuildContext context) {

    final brightness = MediaQuery.of(context).platformBrightness;

    return Scaffold(

      backgroundColor: brightness == Brightness.dark
          ? const Color(0xFF131720)
          : const Color(0xFFFFFFFF),

      body: SafeArea(
        child: WebViewWidget(
          controller: controller,
        ),
      ),

    );

  }

}
