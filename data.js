/* ACADEMIC HUB — DATA FILE
   Edit this file only. Structure: Department -> Semester/DEL -> up to 8
   Course slots -> 5 categories (PYQ/Lectures/Tutorials/Quizzes/Misc).
   First Year has 18 course slots instead of 8 (shared by all branches).
   All departments live in one flat "departments" list — no UG/PG split.
   Paste links into the "link": "" fields. Leave a course slot's code
   and name blank if unused — it will not show on the site.
*/
const SITE_DATA = 
{
  "firstYear": {
    "code": "YEAR 1",
    "name": "First Year (Common — All UG Branches)",
    "note": "Shared across all branches before branch allocation.",
    "link": "",
    "courses": [
      {
        "code": "BIO F101",
        "name": "INTRODUCTION TO BIOLOGY ",
        "categories": {
          "PYQ": {
            "code": "PYQ",
            "name": "PYQs",
            "link": "https://drive.google.com/drive/folders/1DkLgcIitcD4E5kkBgU6T6Qobpz4xj0aV?usp=sharing"
          },
          "LEC": {
            "code": "LEC",
            "name": "Lectures",
            "link": "https://drive.google.com/drive/folders/1t8b39ucY06eLnhDlly8a47BqHj6YKjtT?usp=drive_link"
          },
          "TUT": {
            "code": "TUT",
            "name": "Tutorials",
            "link": ""
          },
          "QUIZ": {
            "code": "QUIZ",
            "name": "Quizzes",
            "link": "https://drive.google.com/drive/folders/1Lju2UdZJ8FT-bhoz0TkPJA2QmjW5GK8g?usp=drive_link"
          },
          "MISC": {
            "code": "MISC",
            "name": "Miscellaneous",
            "link": "https://drive.google.com/drive/folders/1Q30O6Y3rXn_-5SKJHoQoTfc7-leM0YuI?usp=drive_link"
          }
        }
      },
      {
        "code": "CHEM F101",
        "name": "INTRODUCTION TO CHEMISTRY",
        "categories": {
          "PYQ": {
            "code": "PYQ",
            "name": "PYQs",
            "link": "https://drive.google.com/drive/folders/1PJqkyWZXfBtH6wye74Fb7VCa_xckVx6F?usp=sharing"
          },
          "LEC": {
            "code": "LEC",
            "name": "Lectures",
            "link": "https://drive.google.com/drive/folders/1dxiPfr14mVsqIGWRLTr9XWdTlQjmbckF?usp=drive_link"
          },
          "TUT": {
            "code": "TUT",
            "name": "Tutorials",
            "link": "https://drive.google.com/drive/folders/1dxiPfr14mVsqIGWRLTr9XWdTlQjmbckF?usp=drive_link"
          },
          "QUIZ": {
            "code": "QUIZ",
            "name": "Quizzes",
            "link": "https://drive.google.com/drive/folders/1vdEbkalHdg5TGuLZYhA6IAEzdBJvrHbe?usp=drive_link"
          },
          "MISC": {
            "code": "MISC",
            "name": "Miscellaneous",
            "link": "https://drive.google.com/drive/folders/1cj_vIRa5iRW7HmJGc3q1c6b28Kwqv3dh?usp=drive_link"
          }
        }
      },
      {
        "code": "CS F111",
        "name": "C PROGRAMMING ",
        "categories": {
          "PYQ": {
            "code": "PYQ",
            "name": "PYQs",
            "link": "https://drive.google.com/drive/folders/1Cuyh8rTv5bOw1GPMc9YjP0_GON7V1-qD?usp=sharing"
          },
          "LEC": {
            "code": "LEC",
            "name": "Lectures",
            "link": "https://drive.google.com/drive/folders/1Kl4pZ2LUNzVE7sPZLCFLSI_U-1AMDKyr?usp=drive_link"
          },
          "TUT": {
            "code": "TUT",
            "name": "Tutorials",
            "link": ""
          },
          "QUIZ": {
            "code": "QUIZ",
            "name": "Quizzes",
            "link": ""
          },
          "MISC": {
            "code": "MISC",
            "name": "Miscellaneous",
            "link": "https://drive.google.com/drive/folders/1XbNia8mGdnlFyredFTTfxq9PUEljwppO?usp=drive_link"
          }
        }
      },
      {
        "code": "BITS F103",
        "name": "ENGINEERING DESIGN AND PROTOTYPING ",
        "categories": {
          "PYQ": {
            "code": "PYQ",
            "name": "PYQs",
            "link": "https://drive.google.com/drive/folders/1UQJxESMl4JQ7YTQIftKQAjEH_4RCLj8o?usp=drive_link"
          },
          "LEC": {
            "code": "LEC",
            "name": "Lectures",
            "link": "https://drive.google.com/drive/folders/1npuEgE3JSdy4gdFjN3BrE26MZvDPsWod?usp=drive_link"
          },
          "TUT": {
            "code": "TUT",
            "name": "Tutorials",
            "link": ""
          },
          "QUIZ": {
            "code": "QUIZ",
            "name": "Quizzes",
            "link": ""
          },
          "MISC": {
            "code": "MISC",
            "name": "Miscellaneous",
            "link": "https://drive.google.com/drive/folders/1w3fGDpOINAi5UvQDbEO8NKmzwo7icsNV?usp=drive_link"
          }
        }
      },
      {
        "code": "MATH F101",
        "name": "MULTIVARIBALE CALCULUS ",
        "categories": {
          "PYQ": {
            "code": "PYQ",
            "name": "PYQs",
            "link": "https://drive.google.com/drive/folders/1d3JxoI1wbx4HX7-zTj5JkvXZ3_xwDSMV?usp=drive_link"
          },
          "LEC": {
            "code": "LEC",
            "name": "Lectures",
            "link": ""
          },
          "TUT": {
            "code": "TUT",
            "name": "Tutorials",
            "link": "https://drive.google.com/drive/folders/1VLkJ9jB1RlY_gwlhj0FKibHhZd-1nBj8?usp=drive_link"
          },
          "QUIZ": {
            "code": "QUIZ",
            "name": "Quizzes",
            "link": "https://drive.google.com/drive/folders/1gVUEpcKZWTfL6vc5On5ZjXpua3g7IST4?usp=drive_link"
          },
          "MISC": {
            "code": "MISC",
            "name": "Miscellaneous",
            "link": "https://drive.google.com/drive/folders/1Fs1bg7acuejuxQMV1OOjoR3uPpnNxSol?usp=drive_link"
          }
        }
      },
      {
        "code": "MATH F102",
        "name": "LINEAR ALGEBRA AND COMPLEX VARIBLES",
        "categories": {
          "PYQ": {
            "code": "PYQ",
            "name": "PYQs",
            "link": "https://drive.google.com/drive/folders/1LD3qzYQAGq-YY1n_1c3sv9DG_ACeMhXy?usp=drive_link"
          },
          "LEC": {
            "code": "LEC",
            "name": "Lectures",
            "link": "https://drive.google.com/drive/folders/1yFK1Y7Gs88kE9QA2i808DxIElHKjJfs7?usp=drive_link"
          },
          "TUT": {
            "code": "TUT",
            "name": "Tutorials",
            "link": "https://drive.google.com/drive/folders/1yFK1Y7Gs88kE9QA2i808DxIElHKjJfs7?usp=drive_link"
          },
          "QUIZ": {
            "code": "QUIZ",
            "name": "Quizzes",
            "link": ""
          },
          "MISC": {
            "code": "MISC",
            "name": "Miscellaneous",
            "link": "https://drive.google.com/drive/folders/1eeWlZvEruEJewoh-Gtir-FgQ-djP0xbZ?usp=drive_link"
          }
        }
      },
      {
        "code": "PHY F101",
        "name": "OSCILLATION OF WAVES ",
        "categories": {
          "PYQ": {
            "code": "PYQ",
            "name": "PYQs",
            "link": "https://drive.google.com/drive/folders/1cfI4uGmgdvuzoNJkMNRN6UWgen91aRNt?usp=drive_link"
          },
          "LEC": {
            "code": "LEC",
            "name": "Lectures",
            "link": "https://drive.google.com/drive/folders/1Iz5jAZM2ZnCU_XLdrtq45DKLfZ4sbOiy?usp=drive_link"
          },
          "TUT": {
            "code": "TUT",
            "name": "Tutorials",
            "link": "https://drive.google.com/drive/folders/1Iz5jAZM2ZnCU_XLdrtq45DKLfZ4sbOiy?usp=drive_link"
          },
          "QUIZ": {
            "code": "QUIZ",
            "name": "Quizzes",
            "link": "https://drive.google.com/drive/folders/1n5dBLYYhMBecA9LomDG1aWrWh-Z7ijOM?usp=drive_link"
          },
          "MISC": {
            "code": "MISC",
            "name": "Miscellaneous",
            "link": "https://drive.google.com/drive/folders/1NxGtIcFPXQ2RF4D7b7Bqg4h7sU4dWfWX?usp=drive_link"
          }
        }
      },
      {
        "code": "MATH F113 ",
        "name": "PROBABILITY AND STATISTICS ",
        "categories": {
          "PYQ": {
            "code": "PYQ",
            "name": "PYQs",
            "link": "https://drive.google.com/drive/folders/15DcohawF7Tr0o4H6oz8xpINmS45XNYU_?usp=drive_link"
          },
          "LEC": {
            "code": "LEC",
            "name": "Lectures",
            "link": ""
          },
          "TUT": {
            "code": "TUT",
            "name": "Tutorials",
            "link": "https://drive.google.com/drive/folders/1qac-8nsRnXsxqVENZh3y-UEH2DgK32OM?usp=drive_link"
          },
          "QUIZ": {
            "code": "QUIZ",
            "name": "Quizzes",
            "link": "https://drive.google.com/drive/folders/1qac-8nsRnXsxqVENZh3y-UEH2DgK32OM?usp=drive_link"
          },
          "MISC": {
            "code": "MISC",
            "name": "Miscellaneous",
            "link": "https://drive.google.com/drive/folders/1yXk-ytt7XPSSWgJBNzB4jNN4DmCfuSVp?usp=drive_link"
          }
        }
      },
      {
        "code": "EEE F111",
        "name": "ELECTRICAL SCIENCES",
        "categories": {
          "PYQ": {
            "code": "PYQ",
            "name": "PYQs",
            "link": "https://drive.google.com/drive/folders/1O9VmBE8bkoSPY_zPv3vlcA-CCAell4Df?usp=drive_link"
          },
          "LEC": {
            "code": "LEC",
            "name": "Lectures",
            "link": "https://drive.google.com/drive/folders/1-3aDEuUeH-CKvchQA6GvlQuaIGROqFhw?usp=drive_link"
          },
          "TUT": {
            "code": "TUT",
            "name": "Tutorials",
            "link": "https://drive.google.com/drive/folders/1-3aDEuUeH-CKvchQA6GvlQuaIGROqFhw?usp=drive_link"
          },
          "QUIZ": {
            "code": "QUIZ",
            "name": "Quizzes",
            "link": "https://drive.google.com/drive/folders/1julGz3kt5PSW1CzmEFQwjhb5MokiUjCD?usp=drive_link"
          },
          "MISC": {
            "code": "MISC",
            "name": "Miscellaneous",
            "link": "https://drive.google.com/drive/folders/122IQmbyrTKoibWCLkulTNzdOEevEvl4F?usp=sharing"
          }
        }
      },
      {
        "code": "BITS F111",
        "name": "THERMODYNAMICS",
        "categories": {
          "PYQ": {
            "code": "PYQ",
            "name": "PYQs",
            "link": "https://drive.google.com/drive/folders/13zYG82R-7POrhUyYbTapJj3lVfYa0IKB?usp=drive_link"
          },
          "LEC": {
            "code": "LEC",
            "name": "Lectures",
            "link": "https://drive.google.com/drive/folders/1lcffefOn5gFR1rGWqfl7ThDswpXLUsrQ?usp=sharing"
          },
          "TUT": {
            "code": "TUT",
            "name": "Tutorials",
            "link": "https://drive.google.com/drive/folders/1lcffefOn5gFR1rGWqfl7ThDswpXLUsrQ?usp=sharing"
          },
          "QUIZ": {
            "code": "QUIZ",
            "name": "Quizzes",
            "link": "https://drive.google.com/drive/folders/1l3C4K-vg6z-sCyMTFn2A15IdcgqJz06p?usp=drive_link"
          },
          "MISC": {
            "code": "MISC",
            "name": "Miscellaneous",
            "link": "https://drive.google.com/drive/folders/1roLY6PDR4sd3aUI4VK2yyCQJSfXUaMkF?usp=drive_link"
          }
        }
      },
      {
        "code": "",
        "name": "",
        "categories": {
          "PYQ": {
            "code": "PYQ",
            "name": "PYQs",
            "link": ""
          },
          "LEC": {
            "code": "LEC",
            "name": "Lectures",
            "link": ""
          },
          "TUT": {
            "code": "TUT",
            "name": "Tutorials",
            "link": ""
          },
          "QUIZ": {
            "code": "QUIZ",
            "name": "Quizzes",
            "link": ""
          },
          "MISC": {
            "code": "MISC",
            "name": "Miscellaneous",
            "link": ""
          }
        }
      },
      {
        "code": "",
        "name": "",
        "categories": {
          "PYQ": {
            "code": "PYQ",
            "name": "PYQs",
            "link": ""
          },
          "LEC": {
            "code": "LEC",
            "name": "Lectures",
            "link": ""
          },
          "TUT": {
            "code": "TUT",
            "name": "Tutorials",
            "link": ""
          },
          "QUIZ": {
            "code": "QUIZ",
            "name": "Quizzes",
            "link": ""
          },
          "MISC": {
            "code": "MISC",
            "name": "Miscellaneous",
            "link": ""
          }
        }
      },
      {
        "code": "",
        "name": "",
        "categories": {
          "PYQ": {
            "code": "PYQ",
            "name": "PYQs",
            "link": ""
          },
          "LEC": {
            "code": "LEC",
            "name": "Lectures",
            "link": ""
          },
          "TUT": {
            "code": "TUT",
            "name": "Tutorials",
            "link": ""
          },
          "QUIZ": {
            "code": "QUIZ",
            "name": "Quizzes",
            "link": ""
          },
          "MISC": {
            "code": "MISC",
            "name": "Miscellaneous",
            "link": ""
          }
        }
      },
      {
        "code": "",
        "name": "",
        "categories": {
          "PYQ": {
            "code": "PYQ",
            "name": "PYQs",
            "link": ""
          },
          "LEC": {
            "code": "LEC",
            "name": "Lectures",
            "link": ""
          },
          "TUT": {
            "code": "TUT",
            "name": "Tutorials",
            "link": ""
          },
          "QUIZ": {
            "code": "QUIZ",
            "name": "Quizzes",
            "link": ""
          },
          "MISC": {
            "code": "MISC",
            "name": "Miscellaneous",
            "link": ""
          }
        }
      },
      {
        "code": "",
        "name": "",
        "categories": {
          "PYQ": {
            "code": "PYQ",
            "name": "PYQs",
            "link": ""
          },
          "LEC": {
            "code": "LEC",
            "name": "Lectures",
            "link": ""
          },
          "TUT": {
            "code": "TUT",
            "name": "Tutorials",
            "link": ""
          },
          "QUIZ": {
            "code": "QUIZ",
            "name": "Quizzes",
            "link": ""
          },
          "MISC": {
            "code": "MISC",
            "name": "Miscellaneous",
            "link": ""
          }
        }
      },
      {
        "code": "",
        "name": "",
        "categories": {
          "PYQ": {
            "code": "PYQ",
            "name": "PYQs",
            "link": ""
          },
          "LEC": {
            "code": "LEC",
            "name": "Lectures",
            "link": ""
          },
          "TUT": {
            "code": "TUT",
            "name": "Tutorials",
            "link": ""
          },
          "QUIZ": {
            "code": "QUIZ",
            "name": "Quizzes",
            "link": ""
          },
          "MISC": {
            "code": "MISC",
            "name": "Miscellaneous",
            "link": ""
          }
        }
      },
      {
        "code": "",
        "name": "",
        "categories": {
          "PYQ": {
            "code": "PYQ",
            "name": "PYQs",
            "link": ""
          },
          "LEC": {
            "code": "LEC",
            "name": "Lectures",
            "link": ""
          },
          "TUT": {
            "code": "TUT",
            "name": "Tutorials",
            "link": ""
          },
          "QUIZ": {
            "code": "QUIZ",
            "name": "Quizzes",
            "link": ""
          },
          "MISC": {
            "code": "MISC",
            "name": "Miscellaneous",
            "link": ""
          }
        }
      },
      {
        "code": "",
        "name": "",
        "categories": {
          "PYQ": {
            "code": "PYQ",
            "name": "PYQs",
            "link": ""
          },
          "LEC": {
            "code": "LEC",
            "name": "Lectures",
            "link": ""
          },
          "TUT": {
            "code": "TUT",
            "name": "Tutorials",
            "link": ""
          },
          "QUIZ": {
            "code": "QUIZ",
            "name": "Quizzes",
            "link": ""
          },
          "MISC": {
            "code": "MISC",
            "name": "Miscellaneous",
            "link": ""
          }
        }
      }
    ]
  },
  "departments": [
    {
      "code": "A1",
      "name": "Chemical Engineering",
      "note": "",
      "link": "",
      "semesters": [
        {
          "code": "2-1",
          "name": "Semester 2-1",
          "link": "",
          "courses": [
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            }
          ]
        },
        {
          "code": "2-2",
          "name": "Semester 2-2",
          "link": "",
          "courses": [
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            }
          ]
        },
        {
          "code": "3-1",
          "name": "Semester 3-1",
          "link": "",
          "courses": [
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            }
          ]
        },
        {
          "code": "3-2",
          "name": "Semester 3-2",
          "link": "",
          "courses": [
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            }
          ]
        },
        {
          "code": "DEL",
          "name": "Department Electives",
          "link": "",
          "courses": [
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            }
          ]
        }
      ]
    },
    {
      "code": "A2",
      "name": "Civil Engineering",
      "note": "",
      "link": "",
      "semesters": [
        {
          "code": "2-1",
          "name": "Semester 2-1",
          "link": "",
          "courses": [
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            }
          ]
        },
        {
          "code": "2-2",
          "name": "Semester 2-2",
          "link": "",
          "courses": [
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            }
          ]
        },
        {
          "code": "3-1",
          "name": "Semester 3-1",
          "link": "",
          "courses": [
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            }
          ]
        },
        {
          "code": "3-2",
          "name": "Semester 3-2",
          "link": "",
          "courses": [
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            }
          ]
        },
        {
          "code": "DEL",
          "name": "Department Electives",
          "link": "",
          "courses": [
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            }
          ]
        }
      ]
    },
    {
      "code": "A4",
      "name": "Mechanical Engineering",
      "note": "",
      "link": "",
      "semesters": [
        {
          "code": "2-1",
          "name": "Semester 2-1",
          "link": "",
          "courses": [
            {
              "code": "ME 217",
              "name": "ATD",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": "https://drive.google.com/drive/folders/16bM8GistTzEkeiJWO1m5RSiTYUlwl8Ug?usp=sharing"
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": "https://drive.google.com/drive/folders/1QFaSQKF9c6s2nq9NcAxnx9VjL4Kc9Xo2?usp=drive_link"
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": "https://drive.google.com/drive/folders/1vzBWf63zU2qSh9Hr1GITG2oKg_jv58c2?usp=drive_link"
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "ME 212",
              "name": "FM",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": "https://drive.google.com/drive/folders/1rueOo1mpewsIH4nKxrl10R1ykENAiLt3?usp=drive_link"
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": "https://drive.google.com/drive/folders/1yG6SGXPBySef_2248HijtgCMLdSh6S6c?usp=drive_link"
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": "https://drive.google.com/drive/folders/1_JzvvraWfwY2AStDcxQAevGTH90YdP_V?usp=drive_link"
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": "https://drive.google.com/drive/folders/1KBM5j2rCuQQuHGDFK_MrOlDiFwbWLC1Q?usp=drive_link"
                }
              }
            },
            {
              "code": "ME F211",
              "name": "MOS",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": "https://drive.google.com/drive/folders/1tYXoET7-uH55HWC2tq88w8GIkUzIJiWH?usp=drive_link"
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": "https://drive.google.com/drive/folders/16NkRvI4xQrwsKBtselmUvC7ycBaDbb-j?usp=drive_link"
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": "https://drive.google.com/drive/folders/11Ni0D7ve39mR9D3xLDlo9IFwxMTGb8Xp?usp=drive_link"
                }
              }
            },
            {
              "code": "ME F216",
              "name": "MSE",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": "https://drive.google.com/drive/folders/1wzfRtKFMOKEHNpQgreR5AxACPV5LIqlX?usp=drive_link"
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": "https://drive.google.com/drive/folders/1xfpyEfGF5kGFCeKuRRNQhvM0907A1o65?usp=drive_link"
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": "https://drive.google.com/drive/folders/1ATVgt6b-wzqEpz_0T0iA67As4hk1t92h?usp=drive_link"
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            }
          ]
        },
        {
          "code": "2-2",
          "name": "Semester 2-2",
          "link": "",
          "courses": [
            {
              "code": "ME F218",
              "name": "AMOS",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": "https://drive.google.com/drive/folders/1GaOZ8jD9cZWXkcLGGO8Z-VIh19A_-C8u?usp=drive_link"
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": "https://drive.google.com/drive/folders/1Yic6RfHqfZHGq8Co5ByoKO14D3sBmXbG?usp=drive_link"
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": "https://drive.google.com/drive/folders/1YdfBwvW7Hk08r3Z5zoiy45DGlpGQlOyA?usp=drive_link"
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": "https://drive.google.com/drive/folders/16MFbHS0Zib9sIMYsRmkxwEudMccm1PCk?usp=drive_link"
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "ME F220",
              "name": "HT",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": "https://drive.google.com/drive/folders/1ioW9rORFtDR3XXjid_eRlrDij43pFtV7?usp=drive_link"
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": "https://drive.google.com/drive/folders/1Em_3zknY9v3MvMRZAWP6QuKSRT8mzRR6?usp=drive_link"
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": "https://drive.google.com/drive/folders/1kSQytxaMCVxxBaHeqPwb3Qq5srD3_quE?usp=drive_link"
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "ME F221",
              "name": "MnM",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": "https://drive.google.com/drive/folders/1ma36BZpRWihuDiQ9rsabNshVp_cCMo6K?usp=drive_link"
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": "https://drive.google.com/drive/folders/1z5B0UhE71X6bjePx9MktSVdBIyz0Y25N?usp=drive_link"
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": "https://drive.google.com/drive/folders/1PblHDlhdCGYbLpc-3So5QROS3FlXAWK-?usp=drive_link"
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": "https://drive.google.com/drive/folders/1t-0qmKVbCZ5KBIZBXp50HyASo3WpStQA?usp=drive_link"
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": "https://drive.google.com/drive/folders/1xcVAcMmMEgsFRMDXSLrFxVuhD-3Q87zk?usp=drive_link"
                }
              }
            },
            {
              "code": "ME F219",
              "name": "MP",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": "https://drive.google.com/drive/folders/1q-ZY1iOwwLmg_0kJs0fPyNl2MUTWR_TZ?usp=drive_link"
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": "https://drive.google.com/drive/folders/1MV5-yeRVTkehN3GKctI7bWj8wzdd4_zr?usp=drive_link"
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": "https://drive.google.com/drive/folders/1EcSaPo4Vfy2Ykia9kVTq83FMKI_So3FD?usp=drive_link"
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            }
          ]
        },
        {
          "code": "3-1",
          "name": "Semester 3-1",
          "link": "",
          "courses": [
            {
              "code": "ME F315",
              "name": "AMP",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": "https://drive.google.com/drive/folders/1mOXNSUYg7F4cgaDIWWnXDK8lEVjhbxuH?usp=drive_link"
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": "https://drive.google.com/drive/folders/1fdzPP5cxeoYTcwfqhNC4zgaY01mguCHV?usp=drive_link"
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": "https://drive.google.com/drive/folders/101Yg_nmZO3ip_lwLb9ObpFFSoNLIKqKH?usp=drive_link"
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "ME F314",
              "name": "DOME",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": "https://drive.google.com/drive/folders/10rBH5i0kV1lXnAJVKaT_AarrMXbE5GkT?usp=drive_link"
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": "https://drive.google.com/drive/folders/1OOWjSfrHSbC5mVVXHbynYOtPGHbDpvPj?usp=drive_link"
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": "https://drive.google.com/drive/folders/1Jcb7mEl1V0qZiJdb_kB5Z3GuiN_OBxIF?usp=drive_link"
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "ME F317",
              "name": "EMM",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": "https://drive.google.com/drive/folders/1K-obiavGYntfisfqGQJSq387IghnFd3F?usp=drive_link"
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": "https://drive.google.com/drive/folders/1G3lpARatRkjCSclDC8zJUzIfwyRwIGRd?usp=drive_link"
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": "https://drive.google.com/drive/folders/15bt3jIuRqyXCoX5_tSomDH8LohvnFDlq?usp=drive_link"
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "ME F316",
              "name": "MM",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": "https://drive.google.com/drive/folders/1IJqQgSMbhVrECaDUqd4ZmH4xwHy98wyz?usp=drive_link"
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": "https://drive.google.com/drive/folders/16IIMgx6MZ1mgj4HKf18V4NyYKGU4WKGs?usp=drive_link"
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": "https://drive.google.com/drive/folders/1d9u6B7b4pgVMM85Kin4-nQuqXM1WJ8mt?usp=drive_link"
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            }
          ]
        },
        {
          "code": "3-2",
          "name": "Semester 3-2",
          "link": "",
          "courses": [
            {
              "code": "ME F318",
              "name": "CAD",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": "https://drive.google.com/drive/folders/17aW4JEWPavmWLS8h5XuEzndRS_77hTs5?usp=drive_link"
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": "https://drive.google.com/drive/folders/1IXN2SOtevBiz3QgGHfba3QgUs8LejbW-?usp=drive_link"
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": "https://drive.google.com/drive/folders/1Vr-wRBGj0pQjjzYvBjkRY90vOKbY3uqJ?usp=drive_link"
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "ME F319",
              "name": "VnC",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": "https://drive.google.com/drive/folders/17Vxtc0GL63OcmYa5n8sYqQ-3L1fpXSRw?usp=drive_link"
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": "https://drive.google.com/drive/folders/1gFNOcHwAlLaaH1okmEHoEV-9DeI4jJPx?usp=drive_link"
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": "https://drive.google.com/drive/folders/1nyPzBoTAT7d8_eLUR2t5UEj5O4uSjAdU?usp=drive_link"
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "ME F320",
              "name": "ENGINEERING OPTIMIZATION",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": "https://drive.google.com/drive/folders/1HRoJtieYgudvUqSwuIccvzvjMSkbmcnf?usp=drive_link"
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": "https://drive.google.com/drive/folders/1UAvoKAgF0OyuOvzSM2MYcGinCtjDA_Kp?usp=drive_link"
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "ME F341",
              "name": "PMFM",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": "https://drive.google.com/drive/folders/1Jzxrk1PacKH8_IPu0l5lNSUYeYjTPnAo?usp=drive_link"
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": "https://drive.google.com/drive/folders/1JeT3n1LzW1A3Z10qV3h9zyl680xXfK5m?usp=drive_link"
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": "https://drive.google.com/drive/folders/17Uk_78q71XU9IRhRWERHZdFaiw0ZYhMw?usp=drive_link"
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": "https://drive.google.com/drive/folders/1Xna1r_qKRgR-7nm1V3hX9v510-0RHdXQ?usp=drive_link"
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            }
          ]
        },
        {
          "code": "DEL",
          "name": "Department Electives",
          "link": "",
          "courses": [
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            }
          ]
        }
      ]
    },
    {
      "code": "A7",
      "name": "Computer Science & Information Systems",
      "note": "",
      "link": "",
      "semesters": [
        {
          "code": "2-1",
          "name": "Semester 2-1",
          "link": "",
          "courses": [
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            }
          ]
        },
        {
          "code": "2-2",
          "name": "Semester 2-2",
          "link": "",
          "courses": [
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            }
          ]
        },
        {
          "code": "3-1",
          "name": "Semester 3-1",
          "link": "",
          "courses": [
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            }
          ]
        },
        {
          "code": "3-2",
          "name": "Semester 3-2",
          "link": "",
          "courses": [
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            }
          ]
        },
        {
          "code": "DEL",
          "name": "Department Electives",
          "link": "",
          "courses": [
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            }
          ]
        }
      ]
    },
    {
      "code": "A3 / A8 / AA",
      "name": "EEE / ENI / ECE (Phoenix Branches)",
      "note": "Largely shared syllabus across all three branches.",
      "link": "",
      "semesters": [
        {
          "code": "2-1",
          "name": "Semester 2-1",
          "link": "",
          "courses": [
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            }
          ]
        },
        {
          "code": "2-2",
          "name": "Semester 2-2",
          "link": "",
          "courses": [
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            }
          ]
        },
        {
          "code": "3-1",
          "name": "Semester 3-1",
          "link": "",
          "courses": [
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            }
          ]
        },
        {
          "code": "3-2",
          "name": "Semester 3-2",
          "link": "",
          "courses": [
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            }
          ]
        },
        {
          "code": "DEL",
          "name": "Department Electives",
          "link": "",
          "courses": [
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            }
          ]
        }
      ]
    },
    {
      "code": "AD",
      "name": "Mathematics & Computing",
      "note": "",
      "link": "",
      "semesters": [
        {
          "code": "2-1",
          "name": "Semester 2-1",
          "link": "",
          "courses": [
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            }
          ]
        },
        {
          "code": "2-2",
          "name": "Semester 2-2",
          "link": "",
          "courses": [
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            }
          ]
        },
        {
          "code": "3-1",
          "name": "Semester 3-1",
          "link": "",
          "courses": [
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            }
          ]
        },
        {
          "code": "3-2",
          "name": "Semester 3-2",
          "link": "",
          "courses": [
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            }
          ]
        },
        {
          "code": "DEL",
          "name": "Department Electives",
          "link": "",
          "courses": [
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            }
          ]
        }
      ]
    },
    {
      "code": "AJ",
      "name": "Environmental",
      "note": "",
      "link": "",
      "semesters": [
        {
          "code": "2-1",
          "name": "Semester 2-1",
          "link": "",
          "courses": [
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            }
          ]
        },
        {
          "code": "2-2",
          "name": "Semester 2-2",
          "link": "",
          "courses": [
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            }
          ]
        },
        {
          "code": "3-1",
          "name": "Semester 3-1",
          "link": "",
          "courses": [
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            }
          ]
        },
        {
          "code": "3-2",
          "name": "Semester 3-2",
          "link": "",
          "courses": [
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            }
          ]
        },
        {
          "code": "DEL",
          "name": "Department Electives",
          "link": "",
          "courses": [
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            }
          ]
        }
      ]
    },
    {
      "code": "B1",
      "name": "M.Sc. Biology",
      "note": "",
      "link": "",
      "semesters": [
        {
          "code": "2-1",
          "name": "Semester 2-1",
          "link": "",
          "courses": [
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            }
          ]
        },
        {
          "code": "2-2",
          "name": "Semester 2-2",
          "link": "",
          "courses": [
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            }
          ]
        },
        {
          "code": "3-1",
          "name": "Semester 3-1",
          "link": "",
          "courses": [
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            }
          ]
        },
        {
          "code": "3-2",
          "name": "Semester 3-2",
          "link": "",
          "courses": [
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            }
          ]
        },
        {
          "code": "DEL",
          "name": "Department Electives",
          "link": "",
          "courses": [
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            }
          ]
        }
      ]
    },
    {
      "code": "B2",
      "name": "M.Sc. Chemistry",
      "note": "",
      "link": "",
      "semesters": [
        {
          "code": "2-1",
          "name": "Semester 2-1",
          "link": "",
          "courses": [
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            }
          ]
        },
        {
          "code": "2-2",
          "name": "Semester 2-2",
          "link": "",
          "courses": [
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            }
          ]
        },
        {
          "code": "3-1",
          "name": "Semester 3-1",
          "link": "",
          "courses": [
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            }
          ]
        },
        {
          "code": "3-2",
          "name": "Semester 3-2",
          "link": "",
          "courses": [
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            }
          ]
        },
        {
          "code": "DEL",
          "name": "Department Electives",
          "link": "",
          "courses": [
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            }
          ]
        }
      ]
    },
    {
      "code": "B3",
      "name": "M.Sc. Economics",
      "note": "",
      "link": "",
      "semesters": [
        {
          "code": "2-1",
          "name": "Semester 2-1",
          "link": "",
          "courses": [
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            }
          ]
        },
        {
          "code": "2-2",
          "name": "Semester 2-2",
          "link": "",
          "courses": [
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            }
          ]
        },
        {
          "code": "3-1",
          "name": "Semester 3-1",
          "link": "",
          "courses": [
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            }
          ]
        },
        {
          "code": "3-2",
          "name": "Semester 3-2",
          "link": "",
          "courses": [
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            }
          ]
        },
        {
          "code": "DEL",
          "name": "Department Electives",
          "link": "",
          "courses": [
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            }
          ]
        }
      ]
    },
    {
      "code": "B4",
      "name": "M.Sc. Mathematics",
      "note": "",
      "link": "",
      "semesters": [
        {
          "code": "2-1",
          "name": "Semester 2-1",
          "link": "",
          "courses": [
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            }
          ]
        },
        {
          "code": "2-2",
          "name": "Semester 2-2",
          "link": "",
          "courses": [
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            }
          ]
        },
        {
          "code": "3-1",
          "name": "Semester 3-1",
          "link": "",
          "courses": [
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            }
          ]
        },
        {
          "code": "3-2",
          "name": "Semester 3-2",
          "link": "",
          "courses": [
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            }
          ]
        },
        {
          "code": "DEL",
          "name": "Department Electives",
          "link": "",
          "courses": [
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            }
          ]
        }
      ]
    },
    {
      "code": "B5",
      "name": "M.Sc. Physics",
      "note": "",
      "link": "",
      "semesters": [
        {
          "code": "2-1",
          "name": "Semester 2-1",
          "link": "",
          "courses": [
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            }
          ]
        },
        {
          "code": "2-2",
          "name": "Semester 2-2",
          "link": "",
          "courses": [
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            }
          ]
        },
        {
          "code": "3-1",
          "name": "Semester 3-1",
          "link": "",
          "courses": [
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            }
          ]
        },
        {
          "code": "3-2",
          "name": "Semester 3-2",
          "link": "",
          "courses": [
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            }
          ]
        },
        {
          "code": "DEL",
          "name": "Department Electives",
          "link": "",
          "courses": [
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            }
          ]
        }
      ]
    },
    {
      "code": "B7",
      "name": "M.Sc. Semiconductors",
      "note": "",
      "link": "",
      "semesters": [
        {
          "code": "2-1",
          "name": "Semester 2-1",
          "link": "",
          "courses": [
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            }
          ]
        },
        {
          "code": "2-2",
          "name": "Semester 2-2",
          "link": "",
          "courses": [
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            }
          ]
        },
        {
          "code": "3-1",
          "name": "Semester 3-1",
          "link": "",
          "courses": [
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            }
          ]
        },
        {
          "code": "3-2",
          "name": "Semester 3-2",
          "link": "",
          "courses": [
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            }
          ]
        },
        {
          "code": "DEL",
          "name": "Department Electives",
          "link": "",
          "courses": [
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            },
            {
              "code": "",
              "name": "",
              "categories": {
                "PYQ": {
                  "code": "PYQ",
                  "name": "PYQs",
                  "link": ""
                },
                "LEC": {
                  "code": "LEC",
                  "name": "Lectures",
                  "link": ""
                },
                "TUT": {
                  "code": "TUT",
                  "name": "Tutorials",
                  "link": ""
                },
                "QUIZ": {
                  "code": "QUIZ",
                  "name": "Quizzes",
                  "link": ""
                },
                "MISC": {
                  "code": "MISC",
                  "name": "Miscellaneous",
                  "link": ""
                }
              }
            }
          ]
        }
      ]
    }
  ]
};
