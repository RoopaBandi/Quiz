
  const questionBank = {
  "CSE": {
    "Data Structures": {
      "Easy": [
        { q: "What is a stack?", options: ["FIFO","LIFO","Queue","Tree"], ans: 1 },
        { q: "Queue follows?", options: ["FIFO","LIFO","Both","None"], ans: 0 },
        { q: "Which data structure uses linked nodes?", options: ["Stack","Queue","Linked List","Array"], ans: 2 },
        { q: "Which is not linear DS?", options: ["Stack","Queue","Tree","Array"], ans: 2 },
        { q: "Which DS uses priority?", options: ["Priority Queue","Stack","List","Deque"], ans: 0 }
      ],
      "Intermediate": [
        { q: "Time complexity of binary search?", options: ["O(n)","O(log n)","O(n^2)","O(1)"], ans: 1 },
        { q: "Which traversal gives sorted order in BST?", options: ["Preorder","Postorder","Inorder","Levelorder"], ans: 2 },
        { q: "Hashing avoids?", options: ["Collisions","Searching","Sorting","Indexing"], ans: 1 },
        { q: "Which DS uses circular structure?", options: ["Array","Circular Queue","Stack","Tree"], ans: 1 },
        { q: "DFS uses which DS?", options: ["Queue","Stack","Array","Graph"], ans: 1 }
      ],
      "Difficult": [
        { q: "Red-black tree property?", options: ["All nodes red","Root is black","Leaf nodes are red","None"], ans: 1 },
        { q: "B-trees are used in?", options: ["Databases","Compilers","OS","AI"], ans: 0 },
        { q: "Which heap is used in Dijkstra?", options: ["Binary Heap","Fibonacci Heap","Max Heap","None"], ans: 1 },
        { q: "AVL tree maintains?", options: ["Balance Factor","Heap Property","BST Property","None"], ans: 0 },
        { q: "Skip lists are used in?", options: ["Searching","Sorting","Graphs","DP"], ans: 0 }
      ]
    },
    "Algorithms": {
      "Easy": [
        { q: "What is sorting?", options: ["Arranging","Deleting","Adding","Searching"], ans: 0 },
        { q: "Linear search is?", options: ["O(1)","O(n)","O(logn)","O(n^2)"], ans: 1 },
        { q: "Which is divide & conquer?", options: ["Merge Sort","Bubble Sort","Selection Sort","Insertion Sort"], ans: 0 },
        { q: "DFS stands for?", options: ["Data File Search","Depth First Search","Direct File System","None"], ans: 1 },
        { q: "BFS uses?", options: ["Stack","Queue","Array","Heap"], ans: 1 }
      ],
      "Intermediate": [
        { q: "Quick sort average case?", options: ["O(n^2)","O(log n)","O(n log n)","O(n)"], ans: 2 },
        { q: "Dijkstra algorithm finds?", options: ["MST","Shortest Path","Sorting","Traversal"], ans: 1 },
        { q: "Kruskal is used for?", options: ["MST","SPT","DFS","None"], ans: 0 },
        { q: "Dynamic programming stores?", options: ["Intermediate results","Final answer","Graphs","None"], ans: 0 },
        { q: "Greedy algorithms work by?", options: ["Optimal substructure","Random choices","Backtracking","None"], ans: 0 }
      ],
      "Difficult": [
        { q: "Travelling Salesman uses?", options: ["Greedy","DP","Graph Coloring","Sorting"], ans: 1 },
        { q: "NP-complete problems are?", options: ["Easy","Hard","Polynomial solvable","None"], ans: 1 },
        { q: "Bellman-Ford detects?", options: ["Negative cycles","Positive cycles","Loops","None"], ans: 0 },
        { q: "Floyd Warshall solves?", options: ["Single source shortest path","All pairs shortest path","MST","DFS"], ans: 1 },
        { q: "Strassen algorithm used in?", options: ["Matrix multiplication","Sorting","Searching","Hashing"], ans: 0 }
      ]
    }
  },

  "AI/ML": {
    "Machine Learning": {
      "Easy": [
        { q: "Supervised learning requires?", options: ["Labels","No Labels","Both","None"], ans: 0 },
        { q: "KNN stands for?", options: ["K-Nearest Neighbor","Known Neural Net","Key Network Node","None"], ans: 0 },
        { q: "Which is regression?", options: ["Predict numbers","Classify","Cluster","Sort"], ans: 0 },
        { q: "Unsupervised learning finds?", options: ["Clusters","Labels","Noise","None"], ans: 0 },
        { q: "Overfitting means?", options: ["Fits training too well","Fits test well","Noisy model","Bad data"], ans: 0 }
      ],
      "Intermediate": [
        { q: "Gradient Descent optimizes?", options: ["Loss function","Accuracy","Database","Tree"], ans: 0 },
        { q: "Which is ensemble?", options: ["Bagging","Boosting","Random Forest","All"], ans: 3 },
        { q: "Naive Bayes assumes?", options: ["Independence","Dependence","Tree structure","None"], ans: 0 },
        { q: "SVM uses?", options: ["Hyperplane","Decision tree","Probability","Clusters"], ans: 0 },
        { q: "Cross-validation is for?", options: ["Model evaluation","Training","Testing","Prediction"], ans: 0 }
      ],
      "Difficult": [
        { q: "PCA reduces?", options: ["Dimensions","Accuracy","Memory","Labels"], ans: 0 },
        { q: "L1 regularization is?", options: ["Lasso","Ridge","Elastic","None"], ans: 0 },
        { q: "Bias-variance tradeoff balances?", options: ["Under/Overfitting","Training/Testing","Speed/Memory","None"], ans: 0 },
        { q: "Markov decision process used in?", options: ["Reinforcement Learning","Supervised","Unsupervised","Clustering"], ans: 0 },
        { q: "K-means objective is?", options: ["Minimize variance","Maximize distance","Sort data","Random split"], ans: 0 }
      ]
    },
    "Deep Learning": {
      "Easy": [
        { q: "Deep learning uses?", options: ["Neural Networks","Stacks","Queues","Trees"], ans: 0 },
        { q: "CNN is used for?", options: ["Images","Audio","Sorting","Graphs"], ans: 0 },
        { q: "RNN is good for?", options: ["Sequential data","Images","Graphs","Sorting"], ans: 0 },
        { q: "Activation adds?", options: ["Non-linearity","Sorting","Speed","Memory"], ans: 0 },
        { q: "Dropout prevents?", options: ["Overfitting","Training","Learning","None"], ans: 0 }
      ],
      "Intermediate": [
        { q: "Backpropagation updates?", options: ["Weights","Labels","Data","Outputs"], ans: 0 },
        { q: "GAN consists of?", options: ["Generator & Discriminator","2 CNNs","Tree","Graph"], ans: 0 },
        { q: "LSTM solves?", options: ["Vanishing gradient","Sorting","Overfitting","Clustering"], ans: 0 },
        { q: "Pooling layer reduces?", options: ["Dimensions","Accuracy","Labels","Data"], ans: 0 },
        { q: "Softmax used in?", options: ["Classification","Regression","Sorting","None"], ans: 0 }
      ],
      "Difficult": [
        { q: "Transformers use?", options: ["Attention","Trees","CNN","RNN"], ans: 0 },
        { q: "BERT is for?", options: ["NLP","Images","Graphs","Sorting"], ans: 0 },
        { q: "Gradient clipping prevents?", options: ["Exploding gradients","Overfitting","Bias","None"], ans: 0 },
        { q: "Autoencoders used in?", options: ["Feature learning","Sorting","Classification","Regression"], ans: 0 },
        { q: "ReLU dies when?", options: ["Output always 0","Output 1","Too big","None"], ans: 0 }
      ]
    }
  },

  "IT": {
    "Networking": {
      "Easy": [
        { q: "IP stands for?", options:["Internet Protocol","Internal Process","Input Port","None"], ans:0 },
        { q: "LAN covers?", options:["Local","Wide","Metropolitan","None"], ans:0 },
        { q: "HTTP is?", options:["Protocol","Hardware","Software","None"], ans:0 },
        { q: "DNS resolves?", options:["Domain names","IP","Data","Packets"], ans:0 },
        { q: "Which is wireless?", options:["Wi-Fi","Ethernet","LAN Cable","DSL"], ans:0 }
      ],
      "Intermediate": [
        { q: "TCP ensures?", options:["Reliability","Speed","Security","None"], ans:0 },
        { q: "IPv6 address length?", options:["32-bit","64-bit","128-bit","256-bit"], ans:2 },
        { q: "SMTP used for?", options:["Email","Web","FTP","DNS"], ans:0 },
        { q: "Subnet mask divides?", options:["Network","Packets","Data","Port"], ans:0 },
        { q: "Which is transport layer?", options:["TCP","IP","HTTP","DNS"], ans:0 }
      ],
      "Difficult": [
        { q: "OSI has?", options:["7 layers","5 layers","4 layers","3 layers"], ans:0 },
        { q: "BGP is used for?", options:["Routing","Switching","Security","DNS"], ans:0 },
        { q: "ARP resolves?", options:["IP→MAC","MAC→IP","DNS→IP","None"], ans:0 },
        { q: "VPN provides?", options:["Secure channel","Faster Internet","More storage","None"], ans:0 },
        { q: "CIDR used for?", options:["Address allocation","Routing","Encryption","None"], ans:0 }
      ]
    },
    "Cyber Security": {
      "Easy": [
        { q:"Firewall blocks?", options:["Traffic","Users","CPU","Memory"], ans:0 },
        { q:"Phishing is?", options:["Fraud emails","Virus","Worm","Spam"], ans:0 },
        { q:"Antivirus detects?", options:["Malware","Spam","Phishing","Encryption"], ans:0 },
        { q:"Encryption ensures?", options:["Confidentiality","Availability","Integrity","None"], ans:0 },
        { q:"Malware means?", options:["Malicious software","Good software","Spam","None"], ans:0 }
      ],
      "Intermediate": [
        { q:"Symmetric key uses?", options:["Same key","Different key","No key","None"], ans:0 },
        { q:"Public key used in?", options:["Asymmetric","Symmetric","Hashing","None"], ans:0 },
        { q:"Hash function is?", options:["One way","Two way","Reversible","None"], ans:0 },
        { q:"DoS attack means?", options:["Denial of Service","Data on Server","Disk out Space","None"], ans:0 },
        { q:"SSL is used for?", options:["Secure web","Emails","FTP","None"], ans:0 }
      ],
      "Difficult": [
        { q:"RSA based on?", options:["Prime factorization","Hashing","Sorting","Graph"], ans:0 },
        { q:"Zero-day attack is?", options:["Unknown exploit","Virus","Phishing","None"], ans:0 },
        { q:"IDS detects?", options:["Intrusion","Encryption","Spam","None"], ans:0 },
        { q:"AES block size?", options:["128-bit","64-bit","256-bit","32-bit"], ans:0 },
        { q:"Blockchain ensures?", options:["Immutability","Phishing","Hacking","None"], ans:0 }
      ]
    }
  },

  "EEE": {
    "Circuits": {
      "Easy": [
        { q:"Ohm's law states?", options:["V=IR","P=VI","E=MC2","None"], ans:0 },
        { q:"Unit of resistance?", options:["Ohm","Volt","Ampere","Watt"], ans:0 },
        { q:"Capacitor stores?", options:["Charge","Current","Resistance","Power"], ans:0 },
        { q:"AC means?", options:["Alternating Current","Average Current","Ampere Current","None"], ans:0 },
        { q:"DC source is?", options:["Battery","Generator","Transformer","None"], ans:0 }
      ],
      "Intermediate": [
        { q:"KCL states?", options:["Current in=out","Voltage in=out","Power in=out","None"], ans:0 },
        { q:"Power factor =?", options:["Cos θ","Sin θ","Tan θ","None"], ans:0 },
        { q:"Resistors in series add?", options:["Directly","Inverse","None","Multiply"], ans:0 },
        { q:"RMS of sine wave?", options:["0.707Vm","1.414Vm","Vm","None"], ans:0 },
        { q:"Inductor stores?", options:["Energy in field","Charge","Voltage","None"], ans:0 }
      ],
      "Difficult": [
        { q:"Thevenin theorem converts?", options:["Network→Voltage source","Voltage→Current","AC→DC","None"], ans:0 },
        { q:"Norton theorem uses?", options:["Current source","Voltage source","Both","None"], ans:0 },
        { q:"Superposition works for?", options:["Linear circuits","Nonlinear","Digital","None"], ans:0 },
        { q:"Fourier analysis used in?", options:["AC analysis","DC","Resistance","None"], ans:0 },
        { q:"Maximum power transfer when?", options:["Rload=Rth","Rload>>Rth","Rload<<Rth","None"], ans:0 }
      ]
    },
    "Electrical Machines": {
      "Easy": [
        { q:"AC generator is?", options:["Alternator","Motor","Battery","None"], ans:0 },
        { q:"DC motor converts?", options:["Electrical→Mechanical","Mechanical→Electrical","None","Heat"], ans:0 },
        { q:"Transformer works on?", options:["Mutual induction","Self induction","DC","None"], ans:0 },
        { q:"Slip in induction motor?", options:["Ns-Nr/Ns","Nr/Ns","Ns/Nr","None"], ans:0 },
        { q:"Starter needed for?", options:["Motors","Generators","Resistors","None"], ans:0 }
      ],
      "Intermediate": [
        { q:"Synchronous speed Ns=?", options:["120f/P","60f/P","fP","None"], ans:0 },
        { q:"Commutator used in?", options:["DC machine","AC machine","Transformer","None"], ans:0 },
        { q:"Efficiency=?", options:["Output/Input","Input/Output","Power*Time","None"], ans:0 },
        { q:"Induction motor rotor?", options:["Squirrel cage","Slip ring","Both","None"], ans:0 },
        { q:"Armature reaction in DC?", options:["Distorts flux","Increases flux","Decreases R","None"], ans:0 }
      ],
      "Difficult": [
        { q:"Hysteresis loss ∝?", options:["f*B^1.6","f*V","I^2R","None"], ans:0 },
        { q:"Eddy current loss reduced by?", options:["Lamination","Thick core","High freq","None"], ans:0 },
        { q:"Salient pole used in?", options:["Hydro alternator","Turbo alternator","Both","None"], ans:0 },
        { q:"Field winding in?", options:["Rotor","Stator","Both","None"], ans:0 },
        { q:"DC generator emf eqn?", options:["E=ΦZN/60","E=VI","E=IR","None"], ans:0 }
      ]
    }
  }
};
